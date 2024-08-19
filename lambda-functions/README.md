# Lambda Functions for Medium Clone AWS Serverless

This directory contains the AWS Lambda functions that serve as the backend for the Medium Clone AWS Serverless application. These functions handle CRUD operations (Create, Read, Update, Delete) for content stored in a DynamoDB table and are exposed through API Gateway.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation and Deployment](#installation-and-deployment)
- [Conclusion](#conclusion)

## Introduction

The Lambda functions in this directory are the core of the backend logic for the Medium Clone application. They interact with AWS DynamoDB to manage articles and page content such as "About" and "Contact" sections. These functions are triggered via HTTP requests through an API Gateway.

## Features

- **Create Content**: Allows the creation of new articles and page content.
- **Read Content**: Fetches content either by ID or retrieves all content stored in DynamoDB.
- **Update Content**: Updates existing articles or page content.
- **Delete Content**: Deletes articles or page content by ID.

## Prerequisites

Before deploying and running these Lambda functions, ensure you have the following:

- An AWS account with access to Lambda, DynamoDB, and API Gateway.
- AWS CLI installed and configured with your credentials.
- Basic knowledge of AWS services, especially Lambda and DynamoDB.

## Installation and Deployment

To deploy these Lambda functions:

1. **Create a DynamoDB Table**:
   - Log in to your AWS Management Console.
   - Navigate to DynamoDB and create a table named `CMSContent`.
   - Set `id` as the primary key.

2. **Deploy Lambda Functions**:
   - Package your Lambda function code and dependencies into a .zip file.
   - Use the AWS CLI or AWS Management Console to create a new Lambda function.
   - Set the environment variable for the DynamoDB table name (`CMSContent`).

3. **Set Up API Gateway**:
   - Create an API in API Gateway.
   - Define methods (GET, POST, PUT, DELETE) and link them to the respective Lambda functions.
   - Deploy the API and note down the endpoint URLs.

## Conclusion

These Lambda functions are the backbone of the serverless architecture used in the Medium Clone AWS Serverless project. By leveraging AWS services like Lambda, DynamoDB, and API Gateway, you can efficiently manage and scale your application's backend.
