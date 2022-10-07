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

