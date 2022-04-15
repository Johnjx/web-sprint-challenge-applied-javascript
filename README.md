# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

You are going to create a Bloomtech Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Bloomtech Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [ ] Navigate to the root of the project with your command line.
- [ ] Run `npm install` to download the dependencies listed in the `package.json` file.
- [ ] Run `npm start` to compile the project and serve it.
- [ ] Navigate Chrome to `http://localhost:3000`
- [ ] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [ ] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [ ] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [ ] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the *main* branch.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Demonstrate your understanding of this week's concepts by answering the following questions:

1. What is the DOM?

    The DOM is a model describing the connection between content and the browser. Specifically the DOM is a representation of the elements on a web page which are all a part of the document object. As a result of this connection, the elements can be manipulated through the use of properties and methods on the document object.

2. What is an event?

    An event can be described as most actions, from a user or client, which happen on a page. The browser has a large list of events that it is keeping track of by default.

3. What is an event listener?

    An event listener allows a developer to capture a specific event, such as a user click, for a variety of reasons. This event is captured on top of chosen DOM nodes. An example return of this method would be changing the background color of the target of the event. 

4. Why would we convert a NodeList into an Array?

    A NodeList is a DOM structure that is similar to an Array, however it is limited in its functionality. You are able to use basic indexing and the .forEach method with a NodeList. If you were to turn the list into an Array, however, then you would have access to all of the extra features and methods that come built into Arrays, such as the .map method.

5. What is a component?

    A component is a chunk of code that includes pieces of HTML, CSS, and JS. These pieces are brought together, via a function, to churn out HTML elements that are structured, styled, and functional. Then, for example, these components that are created may be added to our main HTML file dynamically, via our JS.