# Task Manager App

A simple Node.js project that allows users to manage their tasks. The app supports CRUD (Create, Read, Update, Delete) operations on tasks and users.

## Features

- Create, read, update, and delete tasks
- Each task has a name, id, and status (completed or not completed)
- Error handling to handle common errors like invalid input, undefined routes, and database errors.
- Client side rendering using vanilla javascript DOM manipulation for a fast and responsive user experience.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- css
- html
- vanilla javascript DOM manipulation

## Getting Started

To get started, clone the repo and run `npm install` to install the dependencies. You'll also need to set up a MongoDB database and add your connection string to a `.env` file.

## Usage

Run the app with `npm start` and go to `http://localhost:3000` in your browser.

## API Endpoints

The following API endpoints are available:

- `POST /tasks` - create a new task
- `GET /tasks` - get all tasks for the current user
- `GET /tasks/:id` - get a specific task
- `PATCH /tasks/:id` - update a specific task
- `DELETE /tasks/:id` - delete a specific task

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you encounter any problems.

## License

This project is licensed under the [MIT License](LICENSE).
