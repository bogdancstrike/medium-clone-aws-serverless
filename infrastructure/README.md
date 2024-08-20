# Infrastructure Setup

This directory contains all the necessary files and instructions to set up the AWS infrastructure for the Medium Clone application, including API Gateway, DynamoDB, Lambda functions, IAM roles, and S3 static hosting.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Infrastructure Components](#infrastructure-components)
  - [API Gateway](#api-gateway)
  - [DynamoDB](#dynamodb)
  - [Lambda Functions](#lambda-functions)
  - [IAM Roles](#iam-roles)
  - [S3 Static Hosting](#s3-static-hosting)
- [Setting Up the Infrastructure](#setting-up-the-infrastructure)
  - [Step 1: Configure AWS CLI](#step-1-configure-aws-cli)
  - [Step 2: Create the DynamoDB Table](#step-2-create-the-dynamodb-table)
  - [Step 3: Create IAM Roles](#step-3-create-iam-roles)
  - [Step 4: Deploy Lambda Functions](#step-4-deploy-lambda-functions)
  - [Step 5: Set Up API Gateway](#step-5-set-up-api-gateway)
  - [Step 6: Set Up S3 Static Hosting](#step-6-set-up-s3-static-hosting)
  - [Step 7: Test the API and Static Site](#step-7-test-the-api-and-static-site)
- [Cleaning Up](#cleaning-up)
- [Conclusion](#conclusion)

## Introduction

This guide will walk you through setting up the backend infrastructure required for the Medium Clone application, which includes the following AWS services:

- **API Gateway**: To expose RESTful APIs to the frontend applications.
- **DynamoDB**: To store and manage content.
- **Lambda Functions**: To handle backend logic and interact with DynamoDB.
- **IAM Roles**: To manage permissions and access control between AWS services.
- **S3 Static Hosting**: To host the frontend applications.

## Prerequisites

Before you begin, ensure you have the following:

- AWS CLI installed and configured with appropriate IAM credentials.
- Node.js installed (for deploying the Lambda functions).
- Basic understanding of AWS services like API Gateway, DynamoDB, Lambda, IAM, and S3.

## Infrastructure Components

### API Gateway

API Gateway will expose a set of RESTful endpoints that interact with the Lambda functions. These endpoints will handle requests for creating, reading, updating, and deleting articles, as well as fetching and updating the "About" and "Contact" page content.

### DynamoDB

DynamoDB will serve as the primary database for storing articles, as well as the content for the "About" and "Contact" pages.

### Lambda Functions

Lambda functions will contain the business logic for processing requests from the API Gateway and interacting with the DynamoDB table.

### IAM Roles

IAM roles are used to manage permissions for the Lambda functions to access DynamoDB and for API Gateway to invoke the Lambda functions. Roles are created with specific policies that define what actions are allowed.

### S3 Static Hosting

S3 will be used to host the static frontend applications (public and administrator) as static websites. This allows users to access the frontend via a web URL.

## Setting Up the Infrastructure

### Step 1: Configure AWS CLI

1. Ensure the AWS CLI is installed. You can download and install it from the [official AWS CLI website](https://aws.amazon.com/cli/).

2. Configure the AWS CLI with your credentials:

    ```bash
    aws configure
    ```

    You will be prompted to enter your AWS Access Key, Secret Access Key, default region, and output format.

### Step 2: Create the DynamoDB Table

1. Log in to the AWS Management Console and navigate to DynamoDB.

2. Create a new table with the following configuration:

    - **Table name**: `CMSContent`
    - **Primary key**: `id` (String)
    - Optionally, set up indexes or additional attributes based on your needs.

3. Save the table settings and wait for the table to be created.

### Step 3: Create IAM Roles

1. Navigate to the IAM service in the AWS Management Console.

2. Create a new IAM role for Lambda with the following policy:

    - **Policy Name**: `DynamoDBAccessPolicy`
    - **Permissions**: Allow the following actions on DynamoDB:
    
    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "dynamodb:PutItem",
            "dynamodb:GetItem",
            "dynamodb:Scan",
            "dynamodb:DeleteItem"
          ],
          "Resource": "arn:aws:dynamodb:<region>:<account-id>:table/CMSContent"
        }
      ]
    }
    ```

3. Attach this role to your Lambda function to allow it to interact with DynamoDB.

4. Create another IAM role for API Gateway if you want API Gateway to invoke Lambda functions securely. Attach a policy that allows API Gateway to invoke the Lambda functions.

### Step 4: Deploy Lambda Functions

1. Navigate to the `lambda-functions/` directory:

    ```bash
    cd lambda-functions
    ```

2. Package and deploy each Lambda function using the AWS CLI or the AWS Management Console.

3. Ensure each Lambda function has the necessary permissions by attaching the IAM roles created in the previous step.

### Step 5: Set Up API Gateway

1. In the AWS Management Console, navigate to API Gateway.

2. Create a new REST API and configure the following endpoints:

    - **GET /articles**: Fetch all articles.
    - **GET /articles?id={id}**: Fetch a specific article by ID.
    - **POST /articles**: Create a new article.
    - **PUT /articles**: Update an existing article.
    - **DELETE /articles?id={id}**: Delete an article by ID.
    - **GET /about**: Fetch the "About" page content.
    - **POST /about**: Update the "About" page content.
    - **GET /contact**: Fetch the "Contact" page content.
    - **POST /contact**: Update the "Contact" page content.

3. For each endpoint, configure the integration to point to the corresponding Lambda function.

4. Deploy the API and note down the endpoint URL.

### Step 6: Set Up S3 Static Hosting

1. **Create S3 Buckets**:
    - Create two S3 buckets, one for the public frontend and one for the administrator frontend.
    - Name them accordingly (e.g., `medium-clone-public` and `medium-clone-admin`).

2. **Upload Frontend Files**:
    - Build your React applications.
    - Upload the contents of the `build` folder (generated after building your React apps) to the respective S3 buckets.

3. **Enable Static Website Hosting**:
    - In the S3 bucket, go to the **Properties** tab.
    - Scroll down to the **Static website hosting** section.
    - Enable static website hosting and set the **Index document** to `index.html`.
    - Note down the **Endpoint** URL provided here. This is the URL you should use to access your website.

4. **Configure Bucket Permissions**:
    - Make the bucket publicly accessible by adding a bucket policy:

    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
      ]
    }
    ```

    - Replace `your-bucket-name` with the actual name of your S3 bucket.

### Step 7: Test the API and Static Site

1. Use tools like Postman, cURL, or your frontend application to test the API endpoints.

2. Access the frontend applications through the S3 static hosting URLs.

3. Ensure that the API is correctly interacting with the Lambda functions and that data is being stored/retrieved from DynamoDB as expected.

## Cleaning Up

If you need to clean up your AWS resources, follow these steps:

1. Delete the DynamoDB table from the AWS Management Console.

2. Remove the Lambda functions.

3. Delete the API Gateway.

4. Delete the S3 buckets.

5. Remove any IAM roles that were created specifically for this project.

## Conclusion

By following this guide, you have successfully set up the backend and frontend infrastructure for the Medium Clone application using AWS services. This setup allows for a scalable, serverless architecture that efficiently handles CRUD operations for articles and page content, and serves a static website via S3.
