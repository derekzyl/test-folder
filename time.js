class NewDate
{
    constructor(date)
    {
        this.date = date;
    }

    getDate()
    {
        return this.date;
    }

    setDate(date)
    {
        this.date = date;

    }
    minutes(){
        return this.date.getMinutes();
    }
    seconds(){
        return this.date.getSeconds();

    }
    /**
        * time differnce is meant to calculate differnce 
        * between two time 
        * @param{ timeDiffernce (theFirstDate, TheSecondDate) }
        * @returns{months, weeks, days, hours, minutes, seconds}
        * */
    timeDifference(d1, d2){    

        let date= new Date(d1);
        let date2= new Date(d2);
        if (d1 ==="today"||d1 ==="now"||d1 ==="current") {  
            date = new Date();
        
    }
        if (d2 ==="today" ||d2 ==="now"||d2 ==="current") {
            date2 = new Date();
        
    }
        
        let diff = date2.getTime() - date.getTime();
        if (diff < 0) {
            diff = Math.abs(diff);
        }
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);   
      const allTime= {
            years,
            months,
            weeks,
            days,
            hours,

            minutes,
            seconds
        }
        return allTime;

}}

const date = new NewDate("today");
console.log(date.timeDifference("today", "2015-03-25"));
