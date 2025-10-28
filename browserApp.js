import {sortedArr,header,summary} from "./process.js"
    // console.log(header);

const sortByDate = document.getElementById("listByDate");
sortedArr.forEach(function(Transaction){
const sortEle = document.createElement("li");
for (let index = 0; index < header.length; index++) {
    const element = header[index];
    
sortEle.innerHTML += `${element}  : ${Transaction[element]}  || `    
}
// console.log("heyyyyyyy");

sortByDate.appendChild(sortEle);
})
const arR = ["AccountHolder", "TotalCredit", "TotalDebit", "LargestTransaction", "SalaryTransactions"]
const analyze = document.getElementById("analyze");
summary.forEach(function(Transaction){
const sortEle = document.createElement("li");
for (let index = 0; index < 5; index++) {
    const element = arR[index];
sortEle.innerHTML += `${element}  : ${Transaction[element]}  || `    
}
analyze.appendChild(sortEle);
})
// console.log(summary);
