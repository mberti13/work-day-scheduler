var currentDay = document.querySelector("#currentDay");
var containerEl = document.querySelector(".container");


//Sets current date at top of page
currentDay.innerHTML = moment().format("dddd, MMMM Do");



//Create a task
$(".saveBtn").on("click", function(){
    var parent = $(this).parent();
    var id = parent.attr("id");
    var text = parent.find("textarea").val();
    localStorage.setItem(id, text);
})


//retrieves tasks
for(var i = 9; i < 18; i++){
    var text = localStorage.getItem(i);
    //sets i = to #id
    $("#"+i).find("textarea").val(text);
}
//sets current hour of the day
var currentHour = moment().hour();
//Sets color based on current time to calendar/schedule 
$(".time-block").each(function(){
    var timeBlockHour = $(this).attr("id");
    var textBlock = $(this).find(".description");
    if(currentHour == timeBlockHour){
        textBlock.addClass("present");
    }else if(currentHour > timeBlockHour){
        textBlock.addClass("past");
    }else{
        textBlock.addClass("future");
    }
    
})
