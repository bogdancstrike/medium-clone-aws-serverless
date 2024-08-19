# Medium Clone AWS Serverless

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

## Prerequisites

Prerequisites
Before you begin, ensure you have the following:

Node.js (>= 14.x) and npm/yarn installed on your machine.
AWS CLI installed and configured with your credentials.
Git installed for version control.
An AWS account with appropriate permissions to create and manage resources (Lambda, API Gateway, DynamoDB).