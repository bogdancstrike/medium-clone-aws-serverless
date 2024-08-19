# Frontend Public

This is the public-facing React application for the Medium Clone AWS Serverless project. It allows users to view published articles and read the "About" and "Contact" page content managed by the administrators.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Conclusion](#conclusion)

## Introduction

The Frontend Public application serves as the interface for users to explore and read articles published on the Medium Clone platform. The content displayed on this platform is managed by the administrator through a separate admin panel.

## Features

- **Article Browsing**: View a list of published articles.
- **Article Reading**: Read full articles by clicking on the article titles.
- **Static Pages**: Access the "About" and "Contact" pages.

## Prerequisites

Before running the application, ensure you have the following:

- Node.js (>= 14.x) installed on your machine.
- npm or yarn installed for package management.
- Access to the AWS API Gateway endpoints created during the infrastructure setup.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/bogdancstrike/medium-clone-aws-serverless.git
    cd medium-clone-aws-serverless/frontend-public
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

2. Open your browser and navigate to `http://localhost:3001` to access the public site.

## Conclusion

The Frontend Public application provides an accessible and user-friendly interface for readers to explore the content on your Medium Clone platform. Ensure your API Gateway is correctly configured to fetch and display the latest articles and page content.
