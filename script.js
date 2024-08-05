var [sec,min,hours]=[0,0,0]
var displaytime=document.getElementById("displaytime")
var timer=null


    function stopwatch()
    {
        sec++
        if(sec == 60)
        {
            sec=0
            min++
            if(min == 60)
            {
                min=0
                hours++
            }
        }
        var h=hours < 10 ? "0" + hours : hours
        var m=min < 10 ? "0" + min : min
        var s=sec < 10 ? "0" + sec : sec
        displaytime.innerHTML=h+":"+m +":"+s
    }
       
    
        function start()
            {
                if(timer!=null)
                {
                  clearInterval(timer)
                }
                timer=setInterval(stopwatch,1000)
            }
        function stop()
        {
            clearInterval(timer)
        }
        
        function reset()
        {
            clearInterval(timer)
            sec=0
            min=0
            hours=0
            displaytime.innerHTML="00:00:00"
        }