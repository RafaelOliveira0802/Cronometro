var sec = 0
var min = 0
var hor = 0
var interval

function twuDigits(digit){
    if(digit < 10){
        return('0' + digit);
    } else{
        return(digit)
    }
}

function start(){
    watch()
    interval = setInterval(watch,1000);
}

function pause(){
    clearInterval(interval);
}

function reset(){
    clearTimeout(interval);
    sec = 0
    min = 0
    hor = 0
    document.getElementById('watch').innerText =  '00:00:00';
}

function watch(){
    sec ++
    if(sec == 60){
        min ++
        sec = 0
        if(min == 60){
            min = 0
            h ++
        }
    }
    document.getElementById('watch').innerText =  twuDigits(hor)+':'+twuDigits(min)+':'+ twuDigits(sec)
}