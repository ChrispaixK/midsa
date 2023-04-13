const timeConversion = (s) => {
  // remove ":" separators
  const ns = s.replace(/:/g, '');
  //get the time period
  let hour = parseInt(ns.slice(0, 2));
  //adjust the hours depending of the time period
  if (ns.slice(-2) === 'PM') {
    if (hour === 12) {
      hour = 12;
    } else {
      hour = hour + 12;
    }
  }
  if (ns.slice(-2) === 'AM' && hour === 12) {
    hour = 0;
  }

  //get the new hour in string
  let shour = hour.toString();
  //get remain indicators (minute and seconds) in string by removing the hour and time period
  let remain = ns.slice(2, -2);
  //get the new time , i used if to avoid having one number in hour section
  if ((shour + remain).length < 6) {
    return (0 + shour + remain).match(/.{1,2}/g).join(':');
  } else {
    return (shour + remain).match(/.{1,2}/g).join(':');
  }
};

let x = '01:01:00AM';
console.log(timeConversion(x));
