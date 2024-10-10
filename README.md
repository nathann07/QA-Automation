# QA Automation

## Introduction
This QA automation program uses Playwright to fetch and validate article timestamps on [Hacker News](https://news.ycombinator.com/newest). It automates the browser to collect data from the first 100 articles, checks if they are sorted by timestamp, and reports any discrepancies.

## Technologies Used
- **JavaScript**
- **Playwright**
- **Node.js**

## Running the Application

1. **Verify Node.js Installation**:
   - Open a terminal or command prompt.
   - Run the following command to check if Node.js is installed:
     ```bash
     node -v
     ```
   - If you see a version number, Node.js is installed, and you can proceed. If not, download and install Node.js from [nodejs.org](https://nodejs.org).

2. **Navigate to the Cloned Repository**:
   - In your terminal or command prompt, navigate to the directory where you cloned the repository. For example:
     ```bash
     cd path/to/cloned/repository
     ```

3. **Install Dependencies**:
   - Run the following command to install dependencies:
     ```bash
     npm i
     ```

4. **Run the Application**:
   - Run the following command to execute the script:
     ```bash
     node index.js
     ```
