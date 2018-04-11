window.onload = function() {
	timer(flipCard);
};

// SELECTING THE DIVS
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

// DEADLINE
var deadline = new Date("June 01, 2019 00:00:00");

// TIMER FUNCTION
function timer(flipCard) {
	var timeInterval = setInterval(function(){
		var time = deadline - new Date();
        
        var day = Math.floor(time/(1000*60*60*24));
        var hour = Math.floor(time/(1000*60*60))%24;
        var minute = Math.floor(time/1000/60)%60;
        var second = Math.floor(time/1000)%60;
        
        days.innerHTML = day;
        hours.innerHTML = hour;
        minutes.innerHTML = minute;
        seconds.innerHTML = second;

        var units = document.querySelectorAll("div.unit");
		flipCard(units[3]);
		if (units[3].innerHTML == "59") flipCard(units[2]);
		if (units[3].innerHTML == "59" && units[2].innerHTML == "59") flipCard(units[1]);
		if (units[3].innerHTML == "59" && units[2].innerHTML == "59" && units[1].innerHTML == "23") flipCard(units[0]);

		if (time < 1) {
			clearInterval(timeInterval);
            days.innerHTML = 0;
            hours.innerHTML = 0;
            minutes.innerHTML = 0;
            seconds.innerHTML = 0;
        }
	}, 1000);
}

// FLIPCARD FUNCTION
function flipCard(el) {
	el.classList.add("flip");
	setTimeout(function(){
		el.classList.remove("flip");
	},700);
}
