    window.addEventListener("load",function() 
                        { changeBackground('#e6324a')
                        });
function changeBackground(color) {
   document.body.style.background = color;
    var changeBackground = Math.random()*10
}
function updateClock()
{
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
    var timeOfDay = currentHours 
    if(currentHours < 12){
        timeOfDay="AM"
    }
    else{
        timeOfDay="PM"
    }
    var Minutes = currentMinutes
    
    if(Minutes < 10){
         Minutes = "0" + Minutes;
    }
    var seconds = currentSeconds
    
    if(seconds < 10){
        seconds = "0" + seconds;
    }  
    var Hours = currentHours
    
    if(Hours < 10){
        Hours = "0" + Hours;
    }    
    var Hours = currentHours
if (Hours <= 12) {
  Hours = "" + hours;
} else if (Hours > 12) {
  Hours = "" + (Hours - 12);
} else if (Hours == 0) {
  Hours = "12";
}
  var currentTimeString = Hours + ":" + Minutes + ":" + seconds + " " + timeOfDay;
  document.getElementById("clock").innerHTML = currentTimeString;
}





