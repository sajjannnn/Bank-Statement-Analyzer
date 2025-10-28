import { csvContent} from "./process.js";
import fs from "fs"
// await ready;
fs.writeFileSync('./bank_summary.csv', csvContent)
console.log(csvContent);
