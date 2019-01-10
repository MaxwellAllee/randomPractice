var socket = io();
$('#buttonClick').on("click", function () {
    var rand = Math.floor(Math.random()*50)
    console.log(rand)
    
    $.post("/api/change", {rand})
    .then(function (result) {
        console.log(result)
    }
    )
});
socket.on('chat message', function (msg) {
    console.log("triggered",msg.name)
    $('.theMessage').html(msg.name);
});


