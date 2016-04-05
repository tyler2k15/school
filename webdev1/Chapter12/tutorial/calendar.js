/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 12
   Tutorial Case

   Author: Tyler Ronek
   Date:   4/4/16

   Function List:
   calendar(calendarDay)
      Creates the calendar table for the month specified in the
      calendarDay parameter. The current date is highlighted in 
      the table.

   writeCalTitle(calendarDay)
      Writes the title row in the calendar table

   writeDayTitle()
      Writes the weekday title rows in the calendar table

   daysInMonth(calendarDay)
      Returns the number of days in the month from calendarDay

   writeCalDays(calendarDay)
      Writes the daily rows in the calendar table, highlighting
      calendarDay
	
*/

function calendar(dateString) {
    // Date that the monthly calendar is based on
    if (dateString == null) calDate = new Date();
    else calDate = new Date(dateString);
    // var calDate = new Date("July 6, 2015");
    
    document.write("<table id = 'calendar_table'>");
    
    // Write the header row of the calendar table
    writeCalTitle(calDate);

    // Write the row of weekday abbreviations
    writeDayNames();

    // Write the calendar days
    writeCalDays(calDate);
    
    document.write("</table>");
}

function writeCalTitle(calendarDay) {
    /* The calendarDay parameter contains a Date object
        that the calendar is based upon. */

    // monthName contains an array of month names
    var monthName = ["January", "February", "March", "April", "May",
                    "June", "July", "August", "September", "October",
                    "November", "December"];

    /* The thisMonth variable contains the calendar month number,
        the thisYear variable contains the 4-digit year value */
    var thisMonth = calendarDay.getMonth();
    var thisYear = calendarDay.getFullYear();

    // Write the table header row of the calendar table
    document.write("<tr>");
    document.write("<th id='calendar_head' colspan='7'>");
    document.write(monthName[thisMonth] + " " + thisYear);
    document.write("</th>");
    document.write("</tr>");
}

function writeDayNames() {
    // Array of weekday abbreviations
    var dayName = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    // Start a table row of the weekday abbreviation
    document.write("<tr>");

    // Loop through the dayName array
    for (var i = 0; i < dayName.length; i++) {
        document.write("<th class='calendar_weekdays'> " + dayName[i] + "</th>");
    }

    // End of table row
    document.write("</tr>");
}

function daysInMonth(calendarDay) {
    // Array of days in each month
    var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

    // Extract the four digit year value from calendarDay
    var thisYear = calendarDay.getFullYear();

    // Extract the month value from calendarDay
    var thisMonth = calendarDay.getMonth();

    // Revise the days in February for leap years
    if (thisYear % 4 == 0) {
        if ((thisYear % 100 !=0) || (thisYear % 400 == 0)) {
            dayCount[1] = 29;
        }
    }

    // Return the number of days for the current month
    return dayCount[thisMonth];
}

function writeCalDays(calendarDay) {
    // Determine the starting day of the month
    var day = new Date(calendarDay.getFullYear(), calendarDay.getMonth(), 1);
    var weekDay = day.getDay();

    // Write blank cells preceding the starting day
    document.write("<tr>");
    for (var i = 0; i < weekDay; i++) {
        document.write("<td></td>");
    }

    // Write cells for each day of the month.
    var totalDays = daysInMonth(calendarDay);
    var highlightDay = calendarDay.getDate();

    for (i = 1; i <= totalDays; i++) {
        // Move to the next day in the month
        day.setDate(i);
        weekDay = day.getDate();

        if (weekDay == 0) document.write("<tr>"); // start a new row on Sunday

        // Test if the day being written matches the calendar day
        if (i == highlightDay) {
            document.write("<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>");
        } else {
            document.write("<td class ='calendar_dates'>" + i + dayEvent[i] + "</td>");
        }

        if (weekDay == 6) document.write("</tr>"); // end the row on Saturday
    }
}

/*
    Calendar is not formatting correctly.
    Unable to find error in JavaScript files.
    Please advise.
    -Tyler Ronek

    WebStorm debugger found no errors.
 */