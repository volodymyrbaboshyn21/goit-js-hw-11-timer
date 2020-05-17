class CountdownTimer {
  constructor(obj) {
    const selector = obj.selector;
    const targetDate = obj.targetDate;
    this.getSelector = () => selector;
    this.getTargetDate = () => targetDate;
  }
  start() {
    this.timerID = setInterval(() => {
      const currentTime = Date.now();
      const time = this.getTargetDate() - currentTime;
     
      /*
       * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
       * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
       */
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      /*
       * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
       * остатка % и делим его на количество миллисекунд в одном часе
       * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
       */
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      /*
       * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
       * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
       */
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

      /*
       * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
       * миллисекунд в одной секунде (1000)
       */
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      document.querySelector(this.getSelector() + " [data-value='days']").innerHTML = days;
      document.querySelector(this.getSelector() + " [data-value='hours']").innerHTML = hours;
      document.querySelector(this.getSelector() + " [data-value='mins']").innerHTML = mins;
      document.querySelector(this.getSelector() + " [data-value='secs']").innerHTML = secs;
  }, 1000);
  }
}
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2020"),
});
timer.start();

