// Setting the date we're counting to

var countDownDate = new Date("Jan 1, 2025, 00:00:00").getTime();

// Updating the countdown every second

var x = setInterval(function() {
    //Get today's date and time
    var now = new Date().getTime();

    // Find the time between now and the countdown date
    var distance = countDownDate - now;
    
    // Time calculation for days, hours, minutes and seconds
    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + " days " + hours + " hrs " + minutes + " min " + seconds + " sec";

    // If countdown is over then display some text
    if(distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "HAPPY NEW YEAR";
    }
}, 1000);

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.width = Math.random() * 10 + 10 + 'px';
    snowflake.style.height = snowflake.style.width;
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random() + 0.5;

    document.getElementById('snowfall').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove(); 
    }, (parseFloat(snowflake.style.animationDuration) * 1000));
}

setInterval(createSnowflake, 100);