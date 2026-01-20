# Practice 2: Quiz App

## Overview
This project is an interactive quiz application designed to reinforce core JavaScript concepts such as event handling, DOM manipulation, and user interaction. The application dynamically displays questions, captures user input, and provides immediate feedback based on selected answers.

## Learning Objectives
By completing this activity, students will practice:
- Managing JavaScript event listeners
- Dynamically updating the DOM
- Handling user input and application state
- Enabling and disabling UI elements based on user actions

## Project Requirements

### 1. HTML Setup
Create a basic HTML structure that includes:
- A container for displaying the quiz question
- Four buttons for answer choices
- A feedback element to display correct or incorrect responses
- A **Next Question** button to advance through the quiz

### 2. JavaScript Functionality

#### Display Questions
- Use an array of question objects, where each object contains:
  - A question string
  - An array of four answer choices
  - The index of the correct answer

#### Handle Answer Selection
- Attach click event listeners to each answer button
- When an answer is selected:
  - Check whether the selected answer is correct
  - Update the feedback element accordingly
  - Disable all answer buttons to prevent multiple selections

#### Next Question Navigation
- Attach an event listener to the **Next Question** button
- When clicked:
  - Load the next question
  - Reset the feedback message
  - Re-enable the answer buttons

## Notes
This project emphasizes JavaScript logic and user interaction. Styling is optional but may be added to improve usability and presentation.

