// Create event listener to enter items below
$('#enter').on("click", function(){

var task=$("#todoItem").val();

$("#todoList").append("<li class='task'>" + task + "<div class='x fas fa-times'></li></div>")
})

// Create event listener to delete items below

$(document).on("click", ".x", function(){

    $(this).parent().remove()
})

// Create event listener to toggle 

$(document).on("click", ".task", function(){

    $(this).toggleClass("done");

    if ($(this).hasClass("done")){
        
        $(this).find("div").removeClass("fa-times");
        $(this).find("div").addClass("fa-check");
    }

    else {
        $(this).find("div").addClass("fa-times")
    }
})
