$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 5){
            $("#flour").css("left","600px").css("top","250px");
            $("#pappers").css("left","600px").css("top","320px");
            $("#cheese").css("left","600px").css("top","380px");
            $("#onion").css("left","650px").css("top","300px");
        } 
    }); 
});
