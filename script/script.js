"use strict";

function sendData() {
    // console.log("done");

    let dateYear = document.getElementById("date-input-year").value;
    let dateMonth = document.getElementById("date-input-month").value;
    let dateDay = document.getElementById("date-input-day").value;
    let dateValue = dateYear + "/" + dateMonth + "/" + dateDay;
    var keyDate = dateYear + dateMonth + dateDay;
    let goToSleep = document.getElementById("sleep-time-input").value;
    let yesterdayCheckebox = document.getElementById("yesterday-checkbox-input").checked;
    let goToSleepTime;
    if (yesterdayCheckebox == true) {
        goToSleepTime = (24 - goToSleep) * -1;
        // console.log(`yesterday: ${goToSleepTime}`);
    } else {
        goToSleepTime = goToSleep;
        // console.log(`to day: ${goToSleepTime}`);
    }
    let wakeUp = document.getElementById("wakeup-time-input").value;

    let sleepTime = wakeUp - goToSleepTime;
    // console.log(`Sleep Time: ${sleepTime}`);

    // var sleepData = [dateValue, goToSleep, yesterdayCheckebox, wakeUp];

    var sleepDataArray = [
        ["key", "date", "go to sleep Time", "wake up time", "sleep"],
        [keyDate, dateValue, goToSleep, wakeUp, sleepTime]
    ];

    
    const worksheet = XLSX.utils.json_to_sheet(sleepDataArray);
    
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "اطلاعات");
    
    XLSX.writeFile(workbook, `${keyDate}.xlsx`);
    
    var sleepDataObject = {
        key: keyDate,
        date: dateValue,
        GoToSleep: goToSleep,
        WakeUp: wakeUp,
        Sleep: sleepTime
    };

    localStorage.setItem("SleepData", JSON.stringify(sleepDataObject));

    const SleepDataFromLocalStorage =JSON.parse(localStorage.getItem("SleepData"));
    console.log(SleepDataFromLocalStorage);

    // console.log(dateYear);
    // console.log(dateMonth);
    // console.log(dateDay);
    // console.log(dateValue);
    // console.log(keyDate);
    // console.log(goToSleep);
    // console.log(yesterdayCheckebox);
    // console.log(wakeUp);
    // console.log(sleepDataArray);
    console.log(sleepDataObject);

    // console.log(sleepData);
}