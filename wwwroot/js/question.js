"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/voteHub").build();
let hipVoteCount = 0;
let skipVoteCount = 0;

document.getElementById("question").innerHTML = "No question yet";

connection.on("QuestionUpdated", function (question) {
    document.getElementById("question").innerHTML = question;
});

connection.start().then(function () {
    //establishing connection with the hub
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("updateQuestionBtn").addEventListener("click", function (event) {
    const newQuestion = document.getElementById("questionTxt").value;
    connection.invoke("UpdateQuestion", newQuestion).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
