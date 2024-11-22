# Personalized Learning Platform

## Overview

The **Personalized Learning Platform** is an innovative web application designed to provide tailored educational experiences for users. By leveraging a microservices architecture, the platform allows for seamless interaction between various services, offering personalized content and adaptive learning paths to enhance user engagement and learning outcomes.

## Features

- **User Registration & Authentication**: Secure user registration and login functionality with email verification.
- **Personalized Learning Paths**: Dynamic content delivery based on user preferences and learning progress.
- **Assessment & Feedback**: Interactive quizzes and feedback mechanisms to assess user understanding and track progress.
- **Analytics Dashboard**: Visual insights into user performance and learning patterns.
- **Admin Panel**: Administrative functionalities to manage users, content, and assessments.
- **Content Recommendation**: Personalized content recommendations based on user interests and progress.

## Technology Stack

- **Frontend**: React, TypeScript
- **Backend**: Node.js, TypeScript, Express
- **Database**: MongoDB
- **Containerization**: Docker
- **Routing**: React Router

## Architecture

The application follows the Model-View-Controller (MVC) architecture and is built using a microservices approach. Each service interacts through well-defined APIs, allowing for modular development and easy scalability.

### Microservices

1. **User Service**: Handles user registration, authentication, and user-related data.
   - **Entry Point**: `user-service/app.ts`
   - **Routes**: `user-service/routes/userRoutes.ts`
   - **Controllers**: `user-service/controllers`

2. **Recommendation Service**: Provides personalized learning recommendations based on user progress.
   - **Entry Point**: `recommendation-service/app.ts`
   - **Routes**: `recommendation-service/routes/recommendationRoutes.ts`
   - **Controllers**: `recommendation-service/controllers/recommendationController.ts`

3. **Content Service**: Manages educational content and delivers it to users.
   - **Entry Point**: `content-service/app.ts`
   - **Routes**: `content-service/routes/contentRoutes.ts`
   - **Controllers**: `content-service/controllers/contentController.ts`

4. **UI Service**: The frontend application built with React.
   - **Entry Point**: `ui/personalized-learning-ui/src/index.tsx`
   - **Components**: `ui/personalized-learning-ui/src/pages`

## Running the Application

To run the application, follow these steps:

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

Open your browser and navigate to [http://localhost:3002](http://localhost:3002) to access the application. Follow the on-screen instructions to register and start.

## Contact

For any inquiries or issues, please reach out via the GitHub repository or contact me directly at aneesh.srivastava.002@gmail.com.
