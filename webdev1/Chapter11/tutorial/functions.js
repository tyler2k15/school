/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 11
   Tutorial Case

   Author: Tyler Ronek
   Date:   4/4/16

   Function List:
   showDate(dateObj)
      Returns the current date in the format mm/dd/yyyy

   showTime(dateObj)
      Returns the current time in the format hh:mm:ss a.m./p.m.

   calcDays(currentDate)
      Returns the number of days between the current date and January 1st
      of the next year

*/

function showDate(dateObj) {
    thisDate = dateObj.getDate();
    thisMonthi =dateObj.getMonth()+1;
    thisYear = dateObj.getFullYear();
    return thisMonth + "/" + thisDate + "/" + thisYear;
}

function showTime(dateObj) {
    thisSecond = dateObj.getSeconds();
    thisMinute = dateObj.getMinutes();
    thisHour = dateObj.getHours();
    return thisHour + ":" + thisMinute + ":" + thisSecond;
}