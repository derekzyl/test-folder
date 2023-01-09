class NewDate
{
    constructor()
    {
    
    }

    getDate(date)
    {
        const date = new Date(date)
        const hr = date.getHours()
        const min =date.getMinutes()
        const sec =date.getSeconds()
        const milliSec = date.getMilliseconds()
        const wkDy=  date.getDay()
        const monthDay = date.getDate()
        const mnt = date.getMonth()
        const yr = date.getFullYear()
        const utcMilliSec = date.getUTCMilliseconds()
        const utcSec= date.getUTCSeconds()
        const utcMin = date.getUTCMinutes()
        const utcHr = date.getUTCHours()
        const utcWeekDay= date.getUTCDay()
        const utcMonthDay = date.getUTCDate()
        const utcMonth = date.getUTCMonth()
        const utcYr = date.getUTCFullYear()
        const monh =["january", "february", "march", "april","may","june","july", "august","september", "october","november","december"]
        const month =monh[mnt]
        const week= ["monday","tuesday","wednesday","thursdsy","friday","saturday","sunday"]
        const weekDay=week[wkDy]
        const gotten ={
            hr,min,sec,milliSec,weekDay,monthDay,month,yr,utcMilliSec,utcSec,utcMin,utcHr,utcWeekDay,utcMonthDay,utcMonth,utcYr
        }
        return gotten 
    }
    setDateChild(futureDate){
const b = futureDate.split("")
        if(futureDate.includes("U")){
            b.pop()
        }
        b.pop()
        const f = b.join("")
        const ff = parseInt(f)
        return ff
    }

    setDate(futureDate, dateTime)
    {let date;
        if (dateTime){
         date = new Date(dateTime)}
        else{
            date=new Date()

        }
        if(futureDate.includes("U")){


        if (futureDate.endsWith("s")){

            const da = this.setDateChild(futureDate)
             date.setUTCSeconds(da)
            return date
        }


        if (futureDate.endsWith("m")){

            const da = this.setDateChild(futureDate)
            date.setUTCMinutes(da)
            return date
        }

        if (futureDate.endsWith("h")){

            const da = this.setDateChild(futureDate)
             date.setUTCHours(da)
            return date
        }


        if (futureDate.endsWith("D")){

            const da = this.setDateChild(futureDate)
            date.setUTCDate(da)
            return date        }


        if (futureDate.endsWith("M")){

            const da = this.setDateChild(futureDate)
             date.setUTCMonth(da)
            return date
        }


        if (futureDate.endsWith("Y")){

            const da = this.setDateChild(futureDate)
             date.setUTCFullYear(da)
            return date
        }






        }
if(!futureDate.includes("U")){
        if (futureDate.endsWith("s")){

            const da = this.setDateChild(futureDate)
             date.setSeconds(da)
            return date
        }

        if (futureDate.endsWith("m")){
            const da = this.setDateChild(futureDate)
             date.setMinutes(da) 
                return date
        }
    
    if (futureDate.endsWith("h")){

            const da = this.setDateChild(futureDate)
             date.setHours(da) 
                return date
    }

    if (futureDate.endsWith("D")){

            const da = this.setDateChild(futureDate)
         date.setDate(da) 
                return date
    }

    if (futureDate.endsWith("M")){

            const da = this.setDateChild(futureDate)
             date.setMonth(da) 
                return date
    }

    if (futureDate.endsWith("Y")){

            const da = this.setDateChild(futureDate)
             date.setFullYear(da) 
                return date
    }
    
    }
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
        * @returns{months, weeks, days, hours, minutes, seconds}}}}}}
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
