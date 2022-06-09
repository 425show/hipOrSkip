"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/voteHub").build();
let hipVoteCount = 0;
let skipVoteCount = 0;

document.getElementById("hipVoteBtn").disabled = true;
document.getElementById("skipVoteBtn").disabled = true;
document.getElementById("results").innerHTML = "No votes casted yet";

connection.on("VoteUpdated", function (message) {
    
    if (message == "hip") {
        hipVoteCount++;
        document.getElementById("hipVoteCount").innerHTML = hipVoteCount;
    }
    else {
        skipVoteCount++;
        document.getElementById("skipVoteCount").innerHTML = skipVoteCount;
    }
    
    document.getElementById("results").innerHTML = `${hipVoteCount} vs ${skipVoteCount}`
});

connection.on("QuestionUpdated", function (question) {
    document.getElementById("question").innerHTML = question;
    hipVoteCount = 0;
    skipVoteCount = 0;
});

connection.start().then(function () {
    document.getElementById("hipVoteBtn").disabled = false;
    document.getElementById("skipVoteBtn").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("hipVoteBtn").addEventListener("click", function (event) {
    connection.invoke("IncrementHipVote").catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("skipVoteBtn").addEventListener("click", function (event) {
    connection.invoke("IncrementSkipVote").catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});