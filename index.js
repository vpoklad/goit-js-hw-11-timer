
class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.selector = document.querySelector(selector);;
        this.targetDate = targetDate;
        this.refs = {
            days: this.selector.querySelector('[data-value="days"]'),
            hours: this.selector.querySelector('[data-value="hours"]'),
            minutes: this.selector.querySelector('[data-value="mins"]'),
            seconds: this.selector.querySelector('[data-value="secs"]'),
        }
        this.start();
        }
        
     
    
    start() { this.timeIntervalId = setInterval(() => {
            const timeToGo = this.targetDate - Date.now();
            if (timeToGo <= 0) {
                clearInterval(this.timeIntervalId);
                alert('Target date has passed!')
                return;
            }

            const timeRemaining = this.getTime(timeToGo);
            this.renderClock(timeRemaining);
        }, 1000)
       
       
     
    }  
    
            
    getTime(time) {        
       
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours =this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, minutes, seconds };
        
    }
   


    renderClock({ days, hours, minutes, seconds }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.minutes.textContent = minutes;
        this.refs.seconds.textContent = seconds;
    }

    pad(value) {
                return String(value).padStart(2, "0");
    }

}



new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 11, 2021'),
});





