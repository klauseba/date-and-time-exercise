# date-and-time-exercise

task:


Write a function formatDistanceToNow, which returns the distance between a given date and now in words.

Please note that the function should be exported from the script.js file.

This function takes one parameter: date - a Date object for formatting

    If the date is 0 to 30 seconds before now, the function should return the string 'less than a minute'.
    If the date is '30 secsto1 min 30 secsbefore now, the function should return the string'1 minute'`.
    If the date is 1 min 30 secs to '44 mins 30 secsbefore now, the function should return the string[2..44] minutes`.
    If the date is '44 mins 30 secs to '89 mins 30 secs before now, the function should return the string about 1 hour.
    Otherwise, it should return the full date in the format DD.MM.YYYY HH:mm:ss. That is: day.month.year hours:minutes:seconds, all in two-digit format, e.g., 01.06.2016 09:07:24. Please note you should add 0 to a one-digit number in months, dates, hours, minutes, and seconds.
    If the date object is undefined or null, it should return the string Date is unknown.

An example of using the function:

formatDistanceToNow(new Date(new Date() - 10)); // 'less than a minute'
formatDistanceToNow(new Date(new Date() - 60 * 1000)); // '1 minute'
formatDistanceToNow(new Date(new Date() - 31 * 60 * 1000)); // '31 minutes'
formatDistanceToNow(new Date(new Date() - 77 * 60 * 1000)); // 'about 1 hour'

formatDistanceToNow(new Date(2012, 6, 28, 9, 7, 32)); // '28.07.2016 09:07:32'
formatDistanceToNow(null); // 'Date is unknown'
formatDistanceToNow(); // 'Date is unknown'
