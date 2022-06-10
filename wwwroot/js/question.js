"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/voteHub").build();
let hipVoteCount = 0;
let skipVoteCount = 0;

connection.start().then(function () {
    //establishing connection with the hub
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("updateQuestionBtn").addEventListener("click", function (event) {
    const newQuestion = document.getElementById("questionInput").value;
    connection.invoke("UpdateQuestion", newQuestion).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
