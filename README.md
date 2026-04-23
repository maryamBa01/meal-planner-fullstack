# meal-planner-fullstack
This project is a fullstack web application built as part of the DA219B lab. The purpose of the application is to help users plan and track their daily meals, including calories and meal categories such as breakfast, lunch, and dinner. The app solves the problem of keeping simple nutrition tracking in one structured system.

The frontend is built using React (Vite), and the backend uses Express.js with MongoDB Atlas as the database. The application follows a REST API structure and implements full CRUD functionality, allowing users to create, read, update, and delete meals in real time. All data is stored in a MongoDB cloud database, and the backend is organized using a Router–Controller–Model architecture.

The application includes input validation using Mongoose, ensuring that all meals contain required fields such as name, calories, and category. A custom field (category) is implemented to reflect the domain-specific design.

To run the project locally:

Install dependencies in both client and server folders
Add your .env file with MongoDB URI
Run backend and frontend using npm scripts or concurrently

This project demonstrates fullstack development skills, API design, database modeling, and frontend-backend integration.
