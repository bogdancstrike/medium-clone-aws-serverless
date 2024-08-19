# Medium Clone AWS Serverless (API Gateway, Lambda, DynamoDB)

This project is a serverless clone of a Medium-like platform, built with two frontend applications (one for administrators and one for public users) and a serverless backend using AWS services such as Lambda, API Gateway, and DynamoDB.

## Table of Contents

- [Project Scope](#project-scope)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Cloning the Repository](#cloning-the-repository)
- [Setup and Configuration](#setup-and-configuration)
  - [AWS Setup](#aws-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Frontend Applications](#running-the-frontend-applications)
  - [Frontend Administrator](#frontend-administrator)
  - [Frontend Public](#frontend-public)
- [Deploying and Testing the Lambda Functions](#deploying-and-testing-the-lambda-functions)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Project Scope

This project is designed to demonstrate the use of AWS serverless architecture to build a full-stack application. It includes:

1. **Frontend Administrator**: A React-based admin panel where administrators can create, update, delete, and manage content that appears on the public site.
2. **Frontend Public**: A React-based public-facing site where users can view published articles and content.
3. **AWS Serverless Backend**:
   - **Lambda Functions**: Serve as the backend logic for handling requests and interfacing with DynamoDB.
   - **API Gateway**: Exposes RESTful APIs to the frontend applications.
   - **DynamoDB**: A NoSQL database to store and manage content.

## Project Structure

```plaintext
medium-clone-aws-serverless/
├── frontend-administrator/  # React app for content administrators
├── frontend-public/         # React app for public users
├── lambda-functions/        # AWS Lambda functions for backend logic
└── README.md                # Project documentation (this file)
```

## Prerequisites

Before you begin, ensure you have the following:

- Node.js (>= 14.x) and npm/yarn installed on your machine.
- AWS CLI installed and configured with your credentials.
- Git installed for version control.
- An AWS account with appropriate permissions to create and manage resources (Lambda, API Gateway, DynamoDB).

## Cloning the Repository

To get started, clone the repository to your local machine:

```code
git clone https://github.com/bogdancstrike/medium-clone-aws-serverless.git
cd medium-clone-aws-serverless
```

## Setup and Configuration

### AWS Setup

1. Create a DynamoDB Table:

- Log in to your AWS Management Console.
- Navigate to DynamoDB and create a table named CMSContent.
- Set id as the primary key.


2. Deploy Lambda Functions:

- Go to the lambda-functions/ directory.
- Deploy each function using the AWS CLI or AWS Console.
- Set the necessary environment variables, such as the DynamoDB table name.
  
3. Configure API Gateway:

- Create a new API Gateway and set up the endpoints to invoke the Lambda functions.
- Deploy the API and note down the endpoint URLs.

## Frontend Setup

For each frontend application (frontend-administrator and frontend-public), you need to configure the API endpoints:

1. Navigate to the respective frontend directory:

```code
cd frontend-administrator
```

or 

```code
cd frontend-public
```

2. Install Dependencies:

```code
npm install
```

3. Configure Environment Variables:

- Create a .env file in each frontend directory.
- Add the necessary environment variables, such as:

```code
REACT_APP_API_URL=https://<your-api-id>.execute-api.<region>.amazonaws.com/dev
```

## Running the Frontend Applications

### Frontend Administrator

1. Start the Admin Panel:

```code
cd frontend-administrator
npm start
```

2. Acces the Admin Panel:
- Open your browser and navigate to http://localhost:3000.

### Frontend Public

1. Start the Public Site:

```code
cd frontend-public
npm start
```


2. Access the Public Site:
- Open your browser and navigate to http://localhost:3001.

## Deploying and Testing the Lambda Functions

1. Navigate to the lambda-functions/ directory:

```code
cd lambda-functions
```

2. Deploy the Lambda Functions:
- Use AWS CLI or the AWS Management Console to deploy the Lambda functions.
- Ensure that the Lambda functions have the necessary permissions to interact with DynamoDB and API Gateway.

3. Testing
- After deployment, use Postman or a similar tool to test the API Gateway endpoints.
- Ensure that all CRUD operations (Create, Read, Update, Delete) work as expected.

## API Documentation

The API exposes several endpoints for managing content:

- GET /content?id=<content-id>: Retrieve content by ID.
- POST /content: Create new content.
- PUT /content: Update existing content.
- DELETE /content?id=<content-id>: Delete content by ID.

### Example Request

```code
curl -X POST https://<your-api-id>.execute-api.<region>.amazonaws.com/dev/content \
-H "Content-Type: application/json" \
-d '{
  "title": "New Article",
  "body": "This is the content of the article."
}'
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.