$(document).ready(function () {
    //The first basic method of Moment.js is the moment() method. Use this to get today's info!
    console.log(moment());

    console.log(moment().format("h:mm:ss"));
    $("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
    colorTable();
});
function colorTable(){
    console.log(moment().format("h a"));
    var current = parseInt(moment().format("h"));
    var m = moment().format("a")
    console.log(m);
    console.log(current);
    if(m === "pm"){
      current+= 12;  
    }
    for(var i = 9; i<18; i++){
        var targeter = "#textarea" +i;
        console.log(targeter);
        var timeSlot = $(targeter).data("value");
        console.log(timeSlot);
        if(current>parseInt(timeSlot)){
            $(targeter).parent().addClass("past");
        }
        if(current===parseInt(timeSlot)){
            $(targeter).parent().addClass("present");
        }
        if(current<parseInt(timeSlot)){
            $(targeter).parent().addClass("future");
        }
    }
}