// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ];

  function superbowlWin(records){

    const winRecord = records.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  
  //It takes an array of records as its argument.
//It uses the find() method to search for the first record in the array that has a result property equal to "W". If such a record is found, the find() method returns it as an object.
//If a win record is found, the function returns its year property. Otherwise, it returns undefined.