$(document).ready(function(){


});

function check(obj){

question  = obj.name.toLowerCase();
objClass = "."+obj.className.toLowerCase();
userAns = $("#answer").val().trim().toLowerCase();
switch(question){
    case "1":
        if(userAns!="Institute of Electrical and Electronics Engineers".toLowerCase()){
            wrong(objClass);
           
        }else{
            right(objClass);   
        }
        break; 

        case "2":
            
            if(userAns!="accelerometer"){
                wrong(objClass);
               
            }else{
                right(objClass);   
            }
            break;
        case "3":
            if(userAns!="transistor".toLowerCase()){
                wrong(objClass);
               
            }else{
                right(objClass);   
            }
            break;
         case "4":
                if(userAns!="motherboard".toLowerCase()){
                    wrong(objClass);
                   
                }else{
                    right(objClass);   
                }
                break;
             case "5":
                    if(userAns!="compiler".toLowerCase()){
                        wrong(objClass);
                       
                    }else{
                        right(objClass);   
                    }
                    break;


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


    function verify(ans,nextPage){
        userAns = $("#prevanswer").val().trim().toLowerCase();
        ans = ans.trim().toLowerCase();
        if(userAns == ans){
            $("#prevanswer").css("border-width","2");
            $("#prevanswer").css("border-color","green");
                window.location = nextPage;
        }else{
            $("#prevanswer").css("border-width","2");
        $("#prevanswer").css("border-color","red");
       
        }
    }