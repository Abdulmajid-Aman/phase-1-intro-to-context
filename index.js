// Your code here
function createEmployeeRecord(array) {
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return employee
}

function createEmployeeRecords(arrays) {
   return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(employeeRecord, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
  
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    });
  
    return employeeRecord;
  }


//   function createTimeOutEvent(employeeRecord, dateStamp) {
//     let [date, hour] = dateStamp.split(' ');
  
//     employeeRecord.timeOutEvents.push({
//       type: "TimeIn",
//       hour: parseInt(hour, 10),
//       date: date
//     });
  
//     return employeeRecord;
//   }
function createTimeOutEvent(employeeRecord, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
  
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    });
  
    return employeeRecord;
  }
  


  function hoursWorkedOnDate(employeeRecord, date) {
  let timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
  let timeOut = employeeRecord.timeOutEvents.find(event => event.date === date);

  return (timeOut.hour - timeIn.hour) / 100;
}


function wagesEarnedOnDate(employeeRecord, date) {
    let hours = hoursWorkedOnDate(employeeRecord, date);
    return hours * employeeRecord.payPerHour;
  }
  
  

  function allWagesFor(employeeRecord) {
    let dates = employeeRecord.timeInEvents.map(event => event.date);
  
    return dates.reduce((total, date) => {
      return total + wagesEarnedOnDate(employeeRecord, date);
    }, 0);
  }

  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => {
      return total + allWagesFor(record);
    }, 0);
  }
  
  
