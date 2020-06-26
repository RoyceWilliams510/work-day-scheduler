$(document).ready(function () {
    //The first basic method of Moment.js is the moment() method. Use this to get today's info!
    console.log(moment());

    console.log(moment().format("h:mm:ss"));
    $("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
    colorTable();
    $(document).on("click",".saveBtn",function(){
        var timePeriod = $(this).val()
        console.log(timePeriod);
        var task = document.querySelector("#textarea"+timePeriod).value;
        console.log(task);
        localStorage.setItem(timePeriod,task);

    })
    checkStorage();
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
            // $(targeter).addClass("past");
            $(targeter).parent().addClass("past");

        }
        if(current===parseInt(timeSlot)){
            // $(targeter).addClass("present");
            $(targeter).parent().addClass("present");

        }
        if(current<parseInt(timeSlot)){
            $(targeter).parent().addClass("future");
            // $(targeter).addClass("future");

        }
    }
}

// Submits a string with the value of the time window that is checked.
function checkStorage(time){
    for(var i =9;i<18; i ++){
        var task = localStorage.getItem(i.toString());
        $("#textarea"+i).val(task);
    }
    

}