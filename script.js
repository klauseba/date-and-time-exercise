
var myDate = new Date('2018-01-22T13:05:18');  // Date Mon Jan 22 2018 13:00:00 GMT+0100 (Central European Standard Time)
var currentDateAndTime = Date(); // todays current date and time> Fri Mar 29 2024 20:57:42 GMT+0100 (Central European Standard Time)

  var month = myDate.getMonth(); // 0  (mont is also 0 based, so January is 0, February is 2...etc)

    var monthsList = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    // console.log(monthsList[month]); // January

  // var date = myDate.getDate(); // 22
  var day = myDate.getDay(); // 1  (Sunday is 0, monday is 1, tuesday is 2...etc)

  var minutes = myDate.getMinutes(); // 5  
  var seconds = myDate.getSeconds(); // 18
  var milliseconds = myDate.getMilliseconds(); // 0

  // console.log(currentDateAndTime);


  function formatDistanceToNow(myDate){
    if(seconds >= 0 && seconds < 31) {
      console.log('less than a minute')
    } else if (seconds >= 30 && minutes < 1.5) {
      console.log('1 minute')
    } else if (minutes >= 1.5 && minutes < 44.5) {
      console.log('XX minutes')
    } else if (seconds >= 2670 && seconds < 5370) {
      console.log('about 1 hour')
    } else {
      console.log('idk')
    }
  }

  var a = new Date(); // Current date now.
  var b = new Date(2024, 0, 1, 0, 0, 0, 0); // Start of 2024.
  var d = (a-b); // Difference in milliseconds.  7680235239

  console.log(d)

  /*
  
    If the date is 0 to 30 seconds before now, the function should return the string 'less than a minute'.
    If the date is '30 secsto1 min 30 secsbefore now, the function should return the string'1 minute'`.
    If the date is 1 min 30 secs to '44 mins 30 secsbefore now, the function should return the string [2..44] minutes`.
    If the date is '44 mins 30 secs to '89 mins 30 secs before now, the function should return the string about 1 hour.
    Otherwise, it should return the full date in the format DD.MM.YYYY HH:mm:ss. That is: day.month.year hours:minutes:seconds, all in two-digit format, e.g., 01.06.2016 09:07:24. Please note you should add 0 to a one-digit number in months, dates, hours, minutes, and seconds.
    If the date object is undefined or null, it should return the string Date is unknown.

  const time = new Date(); // Date Fri Mar 29 2024 19:59:52 GMT+0100 (Central European Standard Time)
  const time2 = time.now(); // 1711738874174
 

An example of using the function:

formatDistanceToNow(new Date(new Date() - 10)); // 'less than a minute'
formatDistanceToNow(new Date(new Date() - 60 * 1000)); // '1 minute'
formatDistanceToNow(new Date(new Date() - 31 * 60 * 1000)); // '31 minutes'
formatDistanceToNow(new Date(new Date() - 77 * 60 * 1000)); // 'about 1 hour'

formatDistanceToNow(new Date(2012, 6, 28, 9, 7, 32)); // '28.07.2016 09:07:32'
formatDistanceToNow(null); // 'Date is unknown'
formatDistanceToNow(); // 'Date is unknown'



var a = new Date(); // Current date now.
var b = new Date(2010, 0, 1, 0, 0, 0, 0); // Start of 2010.
var d = (b-a); // Difference in milliseconds.


*/