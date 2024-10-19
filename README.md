# Personalized Learning Platform

## Overview

The **Personalized Learning Platform** is an innovative web application designed to provide tailored educational experiences for users. By leveraging a microservices architecture, the platform allows for seamless interaction between various services, offering personalized content and adaptive learning paths to enhance user engagement and learning outcomes.

## Features

- **User Registration & Authentication**: Secure user registration and login functionality with email verification.
- **Personalized Learning Paths**: Dynamic content delivery based on user preferences and learning progress.
- **Assessment & Feedback**: Interactive quizzes and feedback mechanisms to assess user understanding and track progress.
- **Analytics Dashboard**: Visual insights into user performance and learning patterns.
- **Admin Panel**: Administrative functionalities to manage users, content, and assessments.

## Technology Stack

- **Frontend**: React
- **Backend**: Node.js, TypeScript, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Containerization**: Docker
- **Task Queue**: Bull
- **Testing**: Jest, ESLint

## Architecture

This application follows the Model-View-Controller (MVC) architecture and is built using a microservices approach. Each service interacts through well-defined APIs, allowing for modular development and easy scalability.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Docker
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AneeshSrivastava/personalized-learning-platform.git
   cd personalized-learning-platform
   ```

2. **Install dependencies**:

   Navigate to each service directory and run:

   ```bash
   npm install
   ```

3. **Set up Environment Variables**:

   Create a `.env` file in the root directory:

   ```bash
   cp .env.example .env
   ```

   Set the below values in the `.env` file:

   ```bash
   MONGO_INITDB_ROOT_USERNAME=root
   MONGO_INITDB_ROOT_PASSWORD=password
   MONGO_DB_PORT=27017
   ```

4. **Run the Application**:

   ```bash
   docker compose up --build -d
   ```

## Usage

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application. Follow the on-screen instructions to register and start.

## Contact

For any inquiries or issues, please reach out via the GitHub repository or contact me directly at aneesh.srivastava.002@gmail.com.
