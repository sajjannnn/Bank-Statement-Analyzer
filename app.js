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
const headerSummarize = ["AccountHolder", "TotalCredit", "TotalDebit", "LargestTransaction","SalaryTransactions"];
class summarize{
    constructor(AccountHolder, TotalCredit, TotalDebit, LargestTransaction,SalaryTransactions){
        this[headerSummarize[0]] = AccountHolder,
        this[headerSummarize[1]] = TotalCredit,
        this[headerSummarize[2]] = TotalDebit,
        this[headerSummarize[3]] = LargestTransaction,
        this[headerSummarize[4]] = SalaryTransactions
    }
}
//function to map and add data in the analyzer data 



sortedArr.forEach(function(Transaction){
for (let index = 0; index < headerSummarize.length; index++) {
    const element = headerSummarize[index];
}
})


}
getData();

