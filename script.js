$(document).ready(function(){


});

function check(obj){

question  = obj.name.toLowerCase();
objClass = "."+obj.className.toLowerCase();
userAns = $("#answer").val().toLowerCase();
switch(question){
    case "1":
        if(userAns!="Institute of Electrical and Electronics Engineers".toLowerCase()){
            $("#answer").css("border-width","2");
            $("#answer").css("border-color","red");
            $(objClass).text("wrong?! maybe try this one?"); 
            $("#nextTip").hide();
           
        }else{
            $("#answer").css("border-width","2");
            $("#answer").css("border-color","green");
            $(objClass).text("Hurray!!"); 
            $("#nextTip").show();
        }

}

    }