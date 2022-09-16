$(document).ready(function(){


});

function check(obj){

question  = obj.name.toLowerCase();
objClass = "."+obj.className.toLowerCase();
userAns = $("#answer").val().toLowerCase();
switch(question){
    case "1":
        if(userAns!="Institute of Electrical and Electronics Engineers".toLowerCase()){
            wrong(objClass);
           
        }else{
            right(objClass);   
        }
        break; 

        case "2":
            if(userAns!="accelerometer".toLowerCase()){
                wrong(objClass);
               
            }else{
                right(objClass);   
            }
        case "3":
            if(userAns!="compiler".toLowerCase()){
                wrong(objClass);
               
            }else{
                right(objClass);   
            }


}

    }

    function wrong(objClass){
        $("#answer").css("border-width","2");
        $("#answer").css("border-color","red");
        $(objClass).text("wrong?! maybe try this one?"); 
        $("#nextTip").hide();
    }

    function right(objClass){
        $("#answer").css("border-width","2");
        $("#answer").css("border-color","green");
        $(objClass).text("Hurray!!"); 
        $("#nextTip").show();
    }