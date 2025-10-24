let arrLine = [];
async function getData(){
    const response = await fetch("https://gist.githubusercontent.com/yash2324/60db76164a7bf5e8e6426c89bd84f265/raw/4f0728dd61f577bbc65ce2c3c6c8466429a77c3d/fe02_bank.csv")
    const table = await response.text();
    arrLine = table.split('\n');
    // console.log(arrLine[0]);
    // arrLine[0]


const header = arrLine[0].split(',');
class bankData{

    constructor(...element){
        // this.header = [];
        for (let index = 0; index < header.length; index++) {
            this[header[index]] = element[index];            
        }
    }

    //methods 
}

const sortedArr = [];
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
console.log(sortedArr);

const sortByDate = document.getElementById("listByDate");
sortedArr.forEach(function(Transaction){
const sortEle = document.createElement("li");
for (let index = 0; index < header.length; index++) {
    const element = header[index];
sortEle.innerHTML += `${element}  : ${Transaction[element]}  || `    
}
sortByDate.appendChild(sortEle);
})





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
  if (person.Type === "Credit") {
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
const arR = ["AccountHolder", "TotalCredit", "TotalDebit", "LargestTransaction", "SalaryTransactions"]

const summary = Array.from(knowCustomer.values());

const analyze = document.getElementById("analyze");
summary.forEach(function(Transaction){
const sortEle = document.createElement("li");
for (let index = 0; index < 5; index++) {
    const element = arR[index];
sortEle.innerHTML += `${element}  : ${Transaction[element]}  || `    
}
analyze.appendChild(sortEle);
})


console.log(summary);

}
getData();

