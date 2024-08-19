# Infrastructure Setup

This directory contains all the necessary files and instructions to set up the AWS infrastructure for the Medium Clone application, including API Gateway, DynamoDB, and Lambda functions.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Infrastructure Components](#infrastructure-components)
  - [API Gateway](#api-gateway)
  - [DynamoDB](#dynamodb)
  - [Lambda Functions](#lambda-functions)
- [Setting Up the Infrastructure](#setting-up-the-infrastructure)
  - [Step 1: Configure AWS CLI](#step-1-configure-aws-cli)
  - [Step 2: Create the DynamoDB Table](#step-2-create-the-dynamodb-table)
  - [Step 3: Deploy Lambda Functions](#step-3-deploy-lambda-functions)
  - [Step 4: Set Up API Gateway](#step-4-set-up-api-gateway)
  - [Step 5: Test the API](#step-5-test-the-api)
- [Cleaning Up](#cleaning-up)
- [Conclusion](#conclusion)

## Introduction

This guide will walk you through setting up the backend infrastructure required for the Medium Clone application, which includes the following AWS services:

- **API Gateway**: To expose RESTful APIs to the frontend applications.
- **DynamoDB**: To store and manage content.
- **Lambda Functions**: To handle backend logic and interact with DynamoDB.

## Prerequisites

Before you begin, ensure you have the following:

- AWS CLI installed and configured with appropriate IAM credentials.
- Node.js installed (for deploying the Lambda functions).
- Basic understanding of AWS services like API Gateway, DynamoDB, and Lambda.

## Infrastructure Components

### API Gateway

API Gateway will expose a set of RESTful endpoints that interact with the Lambda functions. These endpoints will handle requests for creating, reading, updating, and deleting articles, as well as fetching and updating the "About" and "Contact" page content.

### DynamoDB

DynamoDB will serve as the primary database for storing articles, as well as the content for the "About" and "Contact" pages.

### Lambda Functions

Lambda functions will contain the business logic for processing requests from the API Gateway and interacting with the DynamoDB table.

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

### Step 3: Deploy Lambda Functions

1. Navigate to the `lambda-functions/` directory:

    ```bash
    cd lambda-functions
    ```

2. Package and deploy each Lambda function using the AWS CLI or the AWS Management Console.

3. Ensure each Lambda function has the necessary permissions to read/write from the DynamoDB table.

### Step 4: Set Up API Gateway

1. In the AWS Management Console, navigate to API Gateway.

2. Create a new REST API and configure the following endpoints:

    - **GET /articles**: Fetch all articles.
    - **GET /articles/{id}**: Fetch a specific article by ID.
    - **POST /articles**: Create a new article.
    - **PUT /articles**: Update an existing article.
    - **DELETE /articles/{id}**: Delete an article by ID.
    - **GET /about**: Fetch the "About" page content.
    - **POST /about**: Update the "About" page content.
    - **GET /contact**: Fetch the "Contact" page content.
    - **POST /contact**: Update the "Contact" page content.

3. For each endpoint, configure the integration to point to the corresponding Lambda function.

4. Deploy the API and note down the endpoint URL.

### Step 5: Test the API

1. Use tools like Postman, cURL, or your frontend application to test the API endpoints.

2. Ensure that the API is correctly interacting with the Lambda functions and that data is being stored/retrieved from DynamoDB as expected.

## Cleaning Up

If you need to clean up your AWS resources, follow these steps:

1. Delete the DynamoDB table from the AWS Management Console.

2. Remove the Lambda functions.

3. Delete the API Gateway.

## Conclusion

By following this guide, you have successfully set up the backend infrastructure for the Medium Clone application using AWS services. This setup allows for a scalable, serverless backend that can handle CRUD operations for articles and page content efficiently.
