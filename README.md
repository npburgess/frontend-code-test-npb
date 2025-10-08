# Launtel Frontend Code Challenge

Welcome to the Launtel frontend development code challenge! This project is designed to assess your React, TypeScript, and software engineering skills, with a particular focus on applying clean architecture principles and functional programming best practices.

## Setup Instructions for Coordinators

Before sending this challenge to a candidate, please follow these steps:

1. **Fork the Repository**:
   - Fork this repository into a new repository named `react-code-test-<candidate-name>`
   - Example: `react-code-test-john-smith`

2. **Grant Access**:
   - Add the candidate's GitHub username as a collaborator to the forked repository
   - Grant them **write access** to the forked repository only (not the original)

3. **Send Instructions**:
   - Provide the candidate with the link to their forked repository
   - Include the instructions below for the candidate

## Instructions for Candidates

1. **Clone Your Repository**: Clone the forked repository that has been created specifically for you
2. **Work on Your Solution**: Complete the tasks outlined below
3. **Commit Often**: Make frequent commits to show your thought process and approach. Messy commits are perfectly fine - we want to see how you work!
4. **Create a Pull Request**: When finished, create a PR to the forked repository with your completed solution, include a description of your work and any additional notes you want to share for demonstrating your work (e.g. how to test the loading state etc) 

## Overview

You'll be working with a React application built with modern tooling including Vite, TypeScript, and React Router. Your task is to enhance the existing User management functionality while demonstrating clean code practices and architectural thinking.

## What We're Looking For

### Clean Architecture & Design Principles
We want to see how you apply these principles in your React/TypeScript code:

#### **Functional Programming Principles**
- **Pure Functions**: Components and utilities should be predictable and side-effect free
- **Immutability**: Avoid mutating state directly; use proper state management patterns
- **Component Composition**: Build complex UI by combining simple, reusable components
- **Single Responsibility**: Each component, hook, and function should have one clear purpose

### Code Quality Expectations
- Clean, readable, and maintainable code
- Proper TypeScript usage with meaningful types
- Component composition and reusability
- Error handling and edge cases
- Performance considerations


## Core Challenge Tasks

### Task 1: Dynamic User Data Fetching
Currently, the User page displays static data. Your task is to:

- Implement API integration to fetch users from a remote endpoint
- Handle loading states appropriately
- Implement proper error handling for failed requests
- Ensure the component remains responsive during data fetching

#### API Endpoint:

```
https://jsonplaceholder.typicode.com/users
```

### Task 2: Functional Sort Implementation
The "Sort By" selector is currently non-functional. You need to:

- Implement sorting functionality for the user list
- Support sorting by multiple criteria (name, email, company, etc.)
- Ensure the sort state persists appropriately

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Run linting:**
   ```bash
   npm run lint
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/              # Page-level components
├── hooks/              # Custom React hooks
├── services/           # API and external service integrations
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── App.tsx             # Main application component
```

## Frontend Frameworks

Along with React and TypeScript, this project uses the following frontend frameworks and libraries:
- **Flowbite React**: For UI components and styling - https://flowbite-react.com/docs/getting-started/introduction (see Components list in sidebar)
- **React Icons**: For consistent iconography - https://react-icons.github.io/react-icons/
- **Tailwind CSS**: For utility-first CSS 
- **React Router**: For client-side routing - https://reactrouter.com/home

## Evaluation Criteria

### Architecture & Design (40%)
- **Clean Architecture**: Proper separation of concerns and layered architecture
- **Component Design**: Reusable, composable, and single-purpose components
- **Functional Programming**: Pure functions, immutability, and composition patterns
- **Code Organization**: Logical file structure and module organization
- **Maintainability**: Code that's easy to understand, modify, and extend

### Implementation Quality (35%)
- **TypeScript Proficiency**: Meaningful types, interfaces, and type safety
- **React Best Practices**: Proper hooks usage, state management, and lifecycle handling
- **Error Handling**: Graceful error boundaries and edge case management
- **Performance**: Efficient rendering, memoization where appropriate, and optimization
- **Code Quality**: Readable, well-documented, and consistent code style

### Functionality (25%)
- **Core Task Completion**: Successfully implementing the required features
- **User Experience**: Intuitive interface and smooth interactions
- **State Management**: Proper handling of loading, error, and success states
- **Robustness**: Application stability and handling of edge cases

## Submission Guidelines

1. **Code Quality**: Ensure your code passes all linting checks
2. **Commit History**: Use clear, descriptive commit messages, and commit often
3. **Pull Request**: Create a PR to the forked repository with your completed solution, include a description of your work and any additional notes you want to share for demonstrating your work (e.g. how to test the loading state etc)

## Time Expectations

This challenge is designed to take approximately 1-2 hours. Focus on demonstrating clean architecture and solid fundamentals, rather than tweaking the UI.

## Questions?

If you have any questions about the requirements or need clarification on any aspect of the challenge, please don't hesitate to reach out.

Good luck, and we look forward to seeing your approach to solving these challenges!
