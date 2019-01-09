
$(".clicked").on("click", changeText)
console.log("this got loaded")

function changeText() {
    console.log("this has been triggered")
    $(".change").html("this has been clicked")
    
}