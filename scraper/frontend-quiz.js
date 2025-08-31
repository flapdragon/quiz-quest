// ==UserScript==
// @name         Frontend Quiz
// @namespace    http://tampermonkey.net/
// @version      2025-08-30
// @description  try to take over the world!
// @author       You
// @match        https://thefrontendquiz.com/quizzes/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=thefrontendquiz.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict"

  console.log("Frontend Quiz!")

  // Define quiz object
  const quiz = [{
    quizType: "React",
    tags: [ "react" ],
    source: "https://thefrontendquiz.com/quizzes/react-quiz.html"
  }, {
    quizType: "JavaScript",
    tags: [ "javascript" ],
    source: "https://thefrontendquiz.com/quizzes/javascript-quiz.html"
  }, {
    quizType: "Tailwind",
    tags: [ "tailwind" ],
    source: "https://thefrontendquiz.com/quizzes/tailwind-quiz.html"
  }, {
    quizType: "HTML",
    tags: [ "html" ],
    source: "https://thefrontendquiz.com/quizzes/html-quiz.html"
  }]
  // Set quiz
  const currentQuiz = quiz[3]
  console.log("currentQuiz", currentQuiz)

  const insertQuestion = async (obj) => {
    const response = await fetch("http://localhost:8131/questions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    })
    const result = await response.json()
    console.log("DONE!", result.data)
  }

  // Add scrape button to body
  // Create new button
  let buttonScrape = document.createElement("button")
  buttonScrape.id = "submit-scrape"
  buttonScrape.appendChild(document.createTextNode("Scrape!"))
  buttonScrape.classList.add("btn")
  console.log(buttonScrape)
  // Append to body
  document.body.appendChild(buttonScrape)

  buttonScrape.addEventListener("click", (e) => {
    // Get question
    const question = document.querySelector("#question-container > h1")
    console.log("question", question, question.innerText)
    // Get options
    const optionsfield = document.querySelectorAll("input[name='question']")
    console.log("optionsfield", optionsfield)
    const optionsArray = [...optionsfield]
    let options = optionsArray.map(o => o.value)
    console.log("options", options)
    // Get selected option
    const selected = document.querySelector("input[name='question']:checked")
    console.log("selected", selected, selected.value)

    // source https://thefrontendquiz.com/quizzes/react-quiz.html

    insertQuestion({ quizType: currentQuiz.quizType, questionText: question.innerText, tags: currentQuiz.tags, options: options, answers: [selected.value], source: currentQuiz.source })
  })
  // Tried to be fancy and append to same form but it only works twice
  // Write new button next to current button
  // insertAfter(submit, buttonScrape)
  // const container = document.getElementById("question-container")
  // container.appendChild(buttonScrape, submit.nextSibling)
  // const buttonScrape = document.getElementById("submit-btn")

})()