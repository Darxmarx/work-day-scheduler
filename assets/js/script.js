//current day and time in jumbotron
var today = moment().format("MMMM Do, YYYY") //January 1st, 2022
$("#currentDay").text(today);

//this set of data determines color of each hour's textblock
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

//save button functionality: saves hour's schedule data only upon button click
$(".saveBtn").on("click", function(event) {
    var calendarEvent = event.target.parentElement.previousElementSibling.children[0].value; //saves value of save button's owned calendar event
    localStorage.setItem(event.target.attributes[1].value, calendarEvent); //stores calendar event into local storage 
    console.log(calendarEvent); //checks saved event item
});


$(document).ready(function() {
    if (localStorage["save-nine"] !== undefined) { //if local storage saved an event...
        var eventNine = $("<p>" + localStorage["save-nine"] + "</p>");//the event is loaded in from local storage
        $("#event-nine").append(eventNine[0].innerText);
    } else { //if nothing is saved in local storage...
        ("");//no event is loaded for the corresponding hour
    }
    if (localStorage["save-ten"] !== undefined) { //10 am
        var eventTen = $("<p>" + localStorage["save-ten"] + "</p>");
        $("#event-ten").append(eventTen[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-eleven"] !== undefined) { //11 am
        var eventEleven = $("<p>" + localStorage["save-eleven"] + "</p>");
        $("#event-eleven").append(eventEleven[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-twelve"] !== undefined) { //12 pm
        var eventTwelve = $("<p>" + localStorage["save-nine"] + "</p>");
        $("#event-twelve").append(eventTwelve[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-one"] !== undefined) { //1 pm
        var eventOne = $("<p>" + localStorage["save-one"] + "</p>");
        $("#event-one").append(eventOne[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-two"] !== undefined) { //2 pm
        var eventTwo = $("<p>" + localStorage["save-two"] + "</p>");
        $("#event-two").append(eventTwo[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-three"] !== undefined) { //3 pm
        var eventThree = $("<p>" + localStorage["save-three"] + "</p>");
        $("#event-three").append(eventThree[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-four"] !== undefined) { //4 pm
        var eventFour = $("<p>" + localStorage["save-four"] + "</p>");
        $("#event-four").append(eventFour[0].innerText);
    } else {
        ("");
    }
    if (localStorage["save-five"] !== undefined) { //5 pm
        var eventFive = $("<p>" + localStorage["save-five"] + "</p>");
        $("#event-five").append(eventFive[0].innerText);
    } else {
        ("");
    }
});
