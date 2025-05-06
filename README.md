# Todo List App with React 19 and Redux Toolkit

A modern Todo List application built with React 19, Redux Toolkit, TypeScript, and Express SSR. This application allows you to manage your tasks with features like adding, editing, deleting, filtering, and drag-and-drop reordering.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Edit task text
- ✅ Delete tasks
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Drag and drop to reorder tasks
- ✅ Data persistence using localStorage
- ✅ Server-side rendering with Express
- ✅ Modern UI with smooth transitions

## Tech Stack

- React 19
- Redux Toolkit for state management
- TypeScript for type safety
- Express for server-side rendering
- React DnD for drag and drop functionality
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory:
   ```bash
   cd todo-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Development mode

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

#### Production build

```bash
npm run build
npm start
```

This will create a production build and start the Express server to serve the application.

## Usage

- **Add a task**: Type in the input field and click "Add" or press Enter
- **Complete a task**: Click the checkbox or the task text
- **Edit a task**: Click the "Edit" button, modify the text, and press Enter or click outside
- **Delete a task**: Click the "Delete" button
- **Filter tasks**: Use the filter buttons (All, Active, Completed)
- **Reorder tasks**: Drag and drop tasks using the handle on the left

## License

This project is open source and available under the MIT License.
