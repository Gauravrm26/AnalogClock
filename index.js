setInterval(() => {
    date = new Date();   // gives times
    htime = date.getHours();  // gives hour only
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotation = 30*htime + mtime/2;  
    mrotation = 6*mtime;
    srotation = 6*stime;

    hours.style.transform = `rotate(${hrotation}deg)`;   // rotation of the clock hands
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);