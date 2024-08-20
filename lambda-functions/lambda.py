import json
import boto3
from boto3.dynamodb.conditions import Key
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('CMSContent')  # Ensure this is the correct DynamoDB table name

def lambda_handler(event, context):
    method = event['httpMethod']
    path = event['path']

    if method == 'GET':
        if path == '/about':
            response = table.get_item(Key={'id': 'about-content-id'})
            if 'Item' in response:
                return {
                    'statusCode': 200,
                    'body': json.dumps(response['Item']['content']),
                    'headers': {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            else:
                return {
                    'statusCode': 404,
                    'body': json.dumps({'error': 'About content not found'}),
                    'headers': {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                }

        elif path == '/contact':
            response = table.get_item(Key={'id': 'contact-content-id'})
            if 'Item' in response:
                return {
                    'statusCode': 200,
                    'body': json.dumps(response['Item']['content']),
                    'headers': {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            else:
                return {
                    'statusCode': 404,
                    'body': json.dumps({'error': 'Contact content not found'}),
                    'headers': {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                }

        elif path.startswith('/articles'):
            if 'pathParameters' in event and event['pathParameters'] and 'id' in event['pathParameters']:
                # Fetch a specific article by ID
                article_id = event['pathParameters']['id']
                response = table.get_item(Key={'id': article_id})
                if 'Item' in response:
                    return {
                        'statusCode': 200,
                        'body': json.dumps(response['Item']),
                        'headers': {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                else:
                    return {
                        'statusCode': 404,
                        'body': json.dumps({'error': 'Article not found'}),
                        'headers': {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
            else:
                # Fetch all articles and filter only those with required fields
                response = table.scan()
                articles = [item for item in response['Items'] if all(key in item for key in ['content', 'description', 'id', 'title'])]
                return {
                    'statusCode': 200,
                    'body': json.dumps(articles),
                    'headers': {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                }

        else:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Path not found'}),
                'headers': {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }

    elif method == 'POST':
        if path == '/about':
            body = json.loads(event['body'])
            item = {
                'id': 'about-content-id',
                'content': body['content']
            }
            table.put_item(Item=item)
            return {
                'statusCode': 201,
                'body': json.dumps({'id': 'about-content-id'}),
                'headers': {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }

        elif path == '/contact':
            body = json.loads(event['body'])
            item = {
                'id': 'contact-content-id',
                'content': body['content']
            }
            table.put_item(Item=item)
            return {
                'statusCode': 201,
                'body': json.dumps({'id': 'contact-content-id'}),
                'headers': {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }

        elif path == '/articles':
            body = json.loads(event['body'])
            if 'id' in body and body['id']:
                # If the article has an ID, it should update the article (PUT)
                table.put_item(Item=body)
                return {
                    'statusCode': 200,
                    'body': json.dumps({'id': body['id']}),
                    'headers': {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            else:
                # If no ID, it's a new article (POST)
                content_id = str(uuid.uuid4())
                body['id'] = content_id
                table.put_item(Item=body)
                return {
                    'statusCode': 201,
                    'body': json.dumps({'id': content_id}),
                    'headers': {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                }

        else:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Path not found'}),
                'headers': {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }

    elif method == 'PUT':
        body = json.loads(event['body'])
        content_id = body['id']
        table.put_item(Item=body)
        return {
            'statusCode': 200,
            'body': json.dumps({'id': content_id}),
            'headers': {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        }

    elif method == 'DELETE':
        if path.startswith('/articles'):
            if 'queryStringParameters' in event and event['queryStringParameters'] and 'id' in event['queryStringParameters']:
                article_id = event['queryStringParameters']['id']
                table.delete_item(Key={'id': article_id})
                return {
                    'statusCode': 204,
                    'body': json.dumps({}),
                    'headers': {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            else:
                return {
                    'statusCode': 400,
                    'body': json.dumps({'error': 'Missing article id'}),
                    'headers': {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                }
        else:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Path not found'}),
                'headers': {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }

    else:
        return {
            'statusCode': 405,
            'body': json.dumps({'error': 'Method Not Allowed'}),
            'headers': {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        }
