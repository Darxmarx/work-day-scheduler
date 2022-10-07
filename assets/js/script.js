//current day and time in jumbotron
var today = moment().format("MMMM Do, YYYY") //January 1st, 2022
$("#currentDay").text(today);

var now = parseInt(moment().format("H")); //checks current hour
var timeBlock = $(".hour") 
$.each(timeBlock, function() {
    var hourCheck = parseInt($(this).attr("id"));
    if (hourCheck === now) {
        $(timeBlock).next().addClass("present"); //if hour of time block matches current hour, box turns red
    } else if (hourCheck < now) {
        $(timeBlock).next().addClass("past"); //if hour of time block has already happened, box turns gray
    } else if (hourCheck > now) {
        $(timeBlock).next().addClass("future"); //if hour of time block has yet to happen, box turns green
    }
});

$(".saveBtn").on("click", function(event) {
    var calendarEvent = event.target.parentElement.previousElementSibling.children[0].value; //saves value of save button's owned calendar event
    localStorage.setItem(event.target.attributes[1].value, calendarEvent); //stores calendar event into local storage 
    console.log(calendarEvent); //checks saved event item
});

$(document).ready(function() {
    if (localStorage["save-nine"] !== undefined && localStorage["save-nine"] !== null) {
        var eventNine = $("<p>" + localStorage["save-nine"] + "</p>");
        $("#event-nine").append(eventNine[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-ten"] !== undefined && localStorage["save-ten"] !== null) {
        var eventTen = $("<p>" + localStorage["save-ten"] + "</p>");
        $("#event-ten").append(eventTen[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-eleven"] !== undefined && localStorage["save-eleven"] !== null) {
        var eventEleven = $("<p>" + localStorage["save-eleven"] + "</p>");
        $("#event-eleven").append(eventEleven[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-twelve"] !== undefined && localStorage["save-twelve"] !== null) {
        var eventTwelve = $("<p>" + localStorage["save-nine"] + "</p>");
        $("#event-twelve").append(eventTwelve[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-one"] !== undefined && localStorage["save-one"] !== null) {
        var eventOne = $("<p>" + localStorage["save-one"] + "</p>");
        $("#event-one").append(eventOne[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-two"] !== undefined && localStorage["save-two"] !== null) {
        var eventTwo = $("<p>" + localStorage["save-two"] + "</p>");
        $("#event-two").append(eventTwo[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-three"] !== undefined && localStorage["save-three"] !== null) {
        var eventThree = $("<p>" + localStorage["save-three"] + "</p>");
        $("#event-three").append(eventThree[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-four"] !== undefined && localStorage["save-four"] !== null) {
        var eventFour = $("<p>" + localStorage["save-four"] + "</p>");
        $("#event-four").append(eventFour[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-five"] !== undefined && localStorage["save-five"] !== null) {
        var eventFive = $("<p>" + localStorage["save-five"] + "</p>");
        $("#event-five").append(eventFive[0].innerText);
    } else {
        ("");
    }
});

