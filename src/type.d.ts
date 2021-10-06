type Offer = {
    adultNum:number,
    kidNum:number,
    guestNum:number,
    setAdultNum:any,
    setKidNum:any,
    setGuestNum:any,
    // dateRange:[Date, Date|null],
    setDateRange:any,
    startDate:Date,
    endDate:Date|null,
    today:Date
}
type OfferR = {
    adultNum:number,
    kidNum:number,
    guestNum:number,
    setAdultNum:any,
    setKidNum:any,
    setGuestNum:any,
    dateRange:[Date, Date|null],
    setDateRange:any,
    startDate:Date,
    endDate:Date|null,
    today:Date
}

type Date = {
    dateRange:[Date|null, Date|null],
    setDateRange:any,
    startDate:Date|null,
    today:Date
}