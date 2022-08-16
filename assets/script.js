var currentDateTime = moment().format("dddd, MMMM DD, YYYY");
var currentHour = moment().format("H");
var saveBtnEl = jQuery.makeArray($(".saveBtn"));
var textEl = jQuery.makeArray($("textarea"));
var textInput;

function init() {
    // Display current Date in header
    $("#currentDay").text(currentDateTime);

    //Set textarea background color based off current time.
    $("textarea").each(function(index){
        if ((index + 9) > currentHour) {
            $(this).css("background-color","rgb(95, 206, 132)")
        } else if ((index + 9) == currentHour) {
            $(this).css("background-color","rgb(222, 90, 37)")
        } else {
            $(this).css("background-color","rgb(128, 128, 128)")
        }
    })

    //render localstorage to display
    for (let k = 0; k < localStorage.length; k++){
        var taskRender = localStorage.getItem("Task"+[k]);
        textEl[k].value = taskRender;
        console.log(textEl[k].value);
    }
}

// store items to local storage. 
function saveTask(event) {
    event.preventDefault();
    for (let j = 0; j < textEl.length; j++) {
        textInput = textEl[j].value;
        localStorage.setItem("Task" + [j], textInput);
    }
}

init();
// run saveTask
$(".saveBtn").click(saveTask);
