class Timer {
    constructor(durationInput, startButton, pauseButton,callbacks) {
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
  
      if(callbacks){
        this.onStart = callbacks.onStart;
        this.onTick = callbacks.onTick;
        this.onPause = callbacks.onPause;
      }
  
      this.startButton.addEventListener('click', this.start);
      this.pauseButton.addEventListener('click', this.pause);
    }
  
    start = () => {
      if(this.onStart){
        this.onStart(this.timeRemaining);
      }
      this.tick();
      this.interval = setInterval(this.tick, 10);
    };
  
    pause = () => {
      clearInterval(this.interval);
      this.onPause();
    };
  
    tick = () => {
      if (this.timeRemaining <= 0) {
        this.pause();
      } else {
        this.timeRemaining = this.timeRemaining - 0.01;
        this.onTick(this.timeRemaining);
      }
    };
  
    get timeRemaining() {
      return parseFloat(this.durationInput.value);
    }
  
    set timeRemaining(time) {
      this.durationInput.value = time.toFixed(2);
    }
  }
  