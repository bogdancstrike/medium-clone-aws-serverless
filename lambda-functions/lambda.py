import json
import boto3
from boto3.dynamodb.conditions import Key
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('CMSContent')  # Make sure this matches your DynamoDB table name

def lambda_handler(event, context):
    method = event['httpMethod']
    
    if method == 'GET':
        if event['queryStringParameters'] and 'id' in event['queryStringParameters']:
            # Fetch content by id
            content_id = event['queryStringParameters']['id']
            response = table.get_item(Key={'id': content_id})
            if 'Item' in response:
                return {
                    'statusCode': 200,
                    'body': json.dumps(response['Item']),
                    'headers': {'Content-Type': 'application/json'}
                }
            else:
                return {
                    'statusCode': 404,
                    'body': json.dumps({'error': 'Content not found'}),
                    'headers': {'Content-Type': 'application/json'}
                }
        else:
            # Fetch all items
            response = table.scan()
            return {
                'statusCode': 200,
                'body': json.dumps(response['Items']),
                'headers': {'Content-Type': 'application/json'}
            }
    
    elif method == 'POST':
        # Create new content
        body = json.loads(event['body'])
        content_id = str(uuid.uuid4())
        body['id'] = content_id
        table.put_item(Item=body)
        return {
            'statusCode': 201,
            'body': json.dumps({'id': content_id}),
            'headers': {'Content-Type': 'application/json'}
        }
    
    elif method == 'PUT':
        # Update existing content
        body = json.loads(event['body'])
        content_id = body['id']
        table.put_item(Item=body)
        return {
            'statusCode': 200,
            'body': json.dumps({'id': content_id}),
            'headers': {'Content-Type': 'application/json'}
        }
    
    elif method == 'DELETE':
        # Delete content by id
        content_id = event['queryStringParameters']['id']
        table.delete_item(Key={'id': content_id})
        return {
            'statusCode': 204,
            'body': json.dumps({}),
            'headers': {'Content-Type': 'application/json'}
        }
    
    else:
        return {
            'statusCode': 405,
            'body': json.dumps({'error': 'Method Not Allowed'}),
            'headers': {'Content-Type': 'application/json'}
        }
