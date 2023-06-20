# eCommerce

Welcome to the eCommerce project! This is an online eshop focused on programming books, mouse pads, coffee cups and luggage tags. The project utilizes MySQL for the database management system, Java for the backend, and Angular for the frontend.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

The eCommerce project offers the following features:

- Browse and search for programming books, mouse pads, cups and luggage tags.
- View product details, including title, price, and description.
- Add products to the shopping cart.
- Checkout and complete the purchase.

## Prerequisites

Before you can run this project locally, ensure that you have the following software installed:

- Java Development Kit (JDK) 11 or later: [Download JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- MySQL Server: [Download MySQL](https://dev.mysql.com/downloads/)

## Installation

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

   https://github.com/g-avgeros/eCommerce.git  

2. Create a MySQL database for the project.

3. Configure the database connection by modifying the `application.properties` file located in the `backend/src/main/resources` directory. Set the appropriate values for the `spring.datasource.url`, `spring.datasource.username`, and `spring.datasource.password` properties.

4. Import the database schema by executing the SQL scripts located in the `database` directory.

5. Install the necessary dependencies for the backend by navigating to the `backend` directory.

6. Install the necessary dependencies for the frontend by navigating to the frontend directory and running the following command:

   npm install

## Usage

To run the project, follow these steps:

1. Start the backend server by navigating to the backend directory.

2. Start the frontend development server by navigating to the frontend directory and running the following command:

   ng serve

3. Open your web browser and visit http://localhost:4200 to access the eShop application.

## Contributing

We welcome contributions from the community! If you would like to contribute to the project, please follow these steps:

1. Fork the repository on GitHub.

2. Create a new branch with a descriptive name for your feature or bug fix.

3. Make your changes and ensure that the code compiles without any errors.

4. Write tests to cover your changes if applicable.

5. Commit your changes and push them to your forked repository.

6. Submit a pull request to the main repository, describing the changes you have made.

We appreciate your effort and will review your pull request as soon as possible.
