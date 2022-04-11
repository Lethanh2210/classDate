class Date{
    constructor(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    setDay(Day){
        this.day = Day;
    }
    setMonth(Month){
        this.month = Month;
    }
    setYear(Year){
        this.year = Year;
    }
    setDate(Day, Month, Year){
        this.day = Day;
        this.month = Month;
        this.year = Year;
    }
    toString(){
        document.write(`${this.day}/${this.month}/${this.year}`);
    }
}