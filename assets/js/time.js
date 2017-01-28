var deadline = '2017-05-25';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  function updateClock(){
    var t = getTimeRemaining(endtime);
    
    daysSpan.innerHTML = t.days;

    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }

  updateClock(); // run function once at first to avoid delay
  var timeinterval = setInterval(updateClock,1000);
}

initializeClock('clockdiv', deadline);
