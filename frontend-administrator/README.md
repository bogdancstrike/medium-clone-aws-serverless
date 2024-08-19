# Frontend Administrator

This is the React-based administrator panel for the Medium Clone AWS Serverless application. The administrator panel allows content administrators to create, update, delete, and manage articles and page content such as "About" and "Contact" sections.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Conclusion](#conclusion)

## Introduction

The Frontend Administrator application is a key component of the Medium Clone AWS Serverless project. It provides an intuitive interface for content administrators to manage the articles and page content that appear on the public site.

## Features

- **Article Management**: Create, update, and delete articles.
- **Content Management**: Manage the "About" and "Contact" page content.
- **Responsive Design**: Optimized for various screen sizes.

## Prerequisites

Before running the application, ensure you have the following:

- Node.js (>= 14.x) installed on your machine.
- npm or yarn installed for package management.
- Access to the AWS API Gateway endpoints created during the infrastructure setup.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/bogdancstrike/medium-clone-aws-serverless.git
    cd medium-clone-aws-serverless/frontend-administrator
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

## Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000` to access the admin panel.

## Conclusion

With the Frontend Administrator, you can efficiently manage the content of your Medium Clone platform. Make sure to follow the setup instructions and ensure that your API Gateway and DynamoDB configurations are correctly set up for a smooth experience.
