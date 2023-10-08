## Clear Sight
Clearsight Backend is the server-side component of the Clearsight application, responsible for handling data processing, and communication with the frontend. This README file provides an overview of the project, instructions for setup, and important information for contributors.

## Table of Contents
Getting Started
Prerequisites
Installation
API Documentation
Contributing

## Getting Started
# Prerequisites
Before you can run Clearsight Backend, make sure you have the following prerequisites installed:

Node.js (v14.x or higher)
npm (Node Package Manager)
MongoDB (or a MongoDB Atlas account)
Git
# Installation
Clone the repository to your local machine:
git clone https://github.com/fuad-miftah/clearsight-backend.git

Navigate to the project directory:
cd clearsight-backend

Install the project dependencies:
npm install

Create a .env file in the root directory and configure the environment variable DB_URL.

Start the server:
npm start
By default, the server will run on port 3000. You can change the port in the .env file.

## API Documentation
https://documenter.getpostman.com/view/29317855/2s9YJgULa7

## Contributing
We welcome contributions to the Clearsight Backend project! To contribute:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b feature/my-feature.
Make your changes and commit them: git commit -m "Add new feature".
Push to your fork: git push origin feature/my-feature.
Open a pull request to the main branch of this repository.
