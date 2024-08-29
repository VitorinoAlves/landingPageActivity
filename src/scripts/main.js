AOS.init();

const targetDate = new Date(2025, 1, 25, 19, 0, 0, 0).getTime();

var timer = setInterval(() => {
    const now = new Date().getTime();
    
    const timeToTheEvent = targetDate-now;

    let days = Math.floor(timeToTheEvent/(1000*60*60*24));
    let hours = Math.floor((timeToTheEvent%(1000*60*60*24)/(1000*60*60)));
    let minutes = Math.floor((timeToTheEvent % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeToTheEvent % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if(timeToTheEvent<0){
        clearInterval(timer);
        document.getElementById('countdown').innerHTML='O evento já começou!';
    }
}, 1000);