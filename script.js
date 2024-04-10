
var currentDateSeconds = Math.round((new Date().getTime() / 1000)); // shows current miliseconds


// Task: If the date is 0 to 30 seconds before now, the function should return the string 'less than a minute'.
// formatDistanceToNow(new Date(new Date() - 10)); // 'less than a minute'
const lowSeconds = currentDateSeconds - 30;
const highSeconds = currentDateSeconds;

// If the date is '30 sec to 1 min 30 sec before now, the function should return the string'1 minute'`.
// formatDistanceToNow(new Date(new Date() - 60 * 1000)); // '1 minute'
const lowMinutes = currentDateSeconds - 90;
const highMinutes = currentDateSeconds - 30;

// If the date is 1 min 30 secs to '44 mins (2640 +30) 30 secs before now, the function should return the string [2..44] minutes`.
// formatDistanceToNow(new Date(new Date() - 31 * 60 * 1000)); // '31 minutes'
const lowMinutes2 = currentDateSeconds - 2670;
const highMinutes2 = currentDateSeconds - 90;

// If the date is '44 mins 30 secs to '89 mins (5340 + 30) 30 secs before now, the function should return the string about 1 hour.
// formatDistanceToNow(new Date(new Date() - 77 * 60 * 1000)); // 'about 1 hour'
const lowHours = currentDateSeconds - 5370;
const highHours = currentDateSeconds - 2670;

// If the date object is undefined or null, it should return the string Date is unknown. 
//done

// Otherwise, it should return the full date in the format DD.MM.YYYY HH:mm:ss. That is: day.month.year hours:minutes:seconds, all in two-digit format, e.g., 01.06.2016 09:07:24. Please note you should add 0 to a one-digit number in months, dates, hours, minutes, and seconds.
// idk how


function formatDistanceToNow(y){
  
    if (y === null || y === undefined){
      console.log('Date is unknown');
      return;
    }

    let x = y.getTime() / 1000;

    if (x > lowSeconds && x < highSeconds) {
      console.log('less than a minute');
    } else if (x > lowMinutes && x < highMinutes) {
      console.log('1 minute');
    } else if (x > lowMinutes2 && x < highMinutes2) {
      console.log(`${Math.floor((currentDateSeconds - x) / 60)} minutes or [2..44] minutes or [${Math.floor((currentDateSeconds - x) / 60)}] minutes... sorry it wasn't clear `);
    } else if (x > lowHours && x < highHours) {
      console.log('about 1 hour'); 
    }  else console.log(y.toLocaleString());  
}


formatDistanceToNow(new Date(new Date() - 10));
formatDistanceToNow(new Date(new Date() - 60 * 1000));
formatDistanceToNow(new Date(new Date() - 31 * 60 * 1000));
formatDistanceToNow(new Date(new Date() - 77 * 60 * 1000)); 
formatDistanceToNow(new Date(2012, 6, 28, 9, 7, 32)); // 7/28/2012, 9:07:32 AM
formatDistanceToNow(null); // 'Date is unknown'
formatDistanceToNow(); // 'Date is unknown'
