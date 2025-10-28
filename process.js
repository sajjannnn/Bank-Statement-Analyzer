let sortedArr = [];
let header = [];
let summary = [];
let csvContent = ""
async function getData(){
    const response = await fetch("https://gist.githubusercontent.com/yash2324/60db76164a7bf5e8e6426c89bd84f265/raw/4f0728dd61f577bbc65ce2c3c6c8466429a77c3d/fe02_bank.csv")
    const table = await response.text();
    let arrLine = [];

    arrLine = table.split('\n');


header = arrLine[0].split(',');

class bankData{

    constructor(...element){
        for (let index = 0; index < header.length; index++) {
            this[header[index]] = element[index];            
        }
    }
    //methods 
}

for (let index = 1; index < arrLine.length; index++) {
    const element = arrLine[index].split(',');
    // console.log(element)
    const ele = new bankData(...element);
    // console.log(ele);

    sortedArr.push(ele);   
}

sortedArr.sort(function(a,b){
    return a.Date-b.Date;
})
// console.log(sortedArr);





//function to map and add data in the analyzer data 
const knowCustomer = new Map()
sortedArr.forEach(({ AccountHolder, Type, Amount, TransactionID, Remarks }) => {
  // if account holder not added yet, initialize their record
  if (!knowCustomer.has(AccountHolder)) {
    knowCustomer.set(AccountHolder, {
      AccountHolder ,
      TotalCredit: 0,
      TotalDebit: 0,
      LargestTransaction: 0,
      SalaryTransactions: []
    });
  }

  // get current person's summary object
  const person = knowCustomer.get(AccountHolder);
  const amt = Number(Amount);

  // add up totals
  if (Type === 'Credit') {
    person.TotalCredit += amt;
  } else {
    person.TotalDebit += amt;
  }

  // update largest transaction
  if (amt > person.LargestTransaction) {
    person.LargestTransaction = amt;
  }

  // add salary transaction IDs
  if (Remarks.includes("Salary")) {
    person.SalaryTransactions.push(TransactionID);
  }
});
// convert map to array
summary = Array.from(knowCustomer.values());


///converted to csv
function arrayToCSV(arr) {
  const headers = Object.keys(arr[0]).join(",");
  const rows = arr.map(obj => Object.values(obj).join(","));
  return [headers, ...rows].join("\n");
}

csvContent = arrayToCSV(summary);
// console.log(csvContent);
}
// export const ready = getData();
// export {csvContent}
await getData();
export {sortedArr,header,summary,csvContent};

