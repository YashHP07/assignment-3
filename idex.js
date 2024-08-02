$(document).ready(function(){
    $("#myLink").click(function(event){
        alert("Link clicked!");
        event.preventDefault(); // This will prevent the link from opening
    });

    $("#myLink").hover(
        function(){
            alert("Mouse entered the link!");
        }, 
        function(){
            alert("Mouse left the link!");
        }
    );

    $("#myLink").focus(function(){
        alert("Link focused!");
    });

    $("#myLink").mouseover(function(){
        alert("Mouse over the link!");
    });

    $("#myLink").mouseout(function(){
        alert("Mouse out of the link!");
    });
});