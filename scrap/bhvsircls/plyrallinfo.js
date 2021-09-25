let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
let json2xlsx = require('node-json-xlsx');
const infobj=[];
request("https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-rajasthan-royals-24th-match-1254081/full-scorecard",cllback);
function cllback(err,response,html){
    const $=cheerio.load(html);
    const arrayoftr=$(".table.batsman tbody tr ");
   // console.log($(arrayoftr).find("td"));
   for(let i=0;i<arrayoftr.length;i++){
    const arr=$(arrayoftr[0]).find("td");
   // let name=$(arr[0]).text();
    infobj.push({
        "name":$(arr[0]).text(),
        "r":$(arr[1]).text(),
        "b":$(arr[3]).text(),
        "4s":$(arr[4]).text(),
        "6s":$(arr[6]).text(),
        "SR":$(arr[7]).text()

    })
   }
    // const arr=$(arrayoftr[0]).find("td");
    // console.log($(arr[0]).text());
    
   // fs.writeFileSync("allinfo.json",JSON.stringify(infobj));
    //Request("allinfo.json",cllback2);
    // async function cllback2(infobj){
    //    for(let i=0;i<infobj.length;i++){
    //     await writeXlsxFile(infobj[i], {
    //         schema: [schema1],
    //         sheets: ['Sheet i'],
    //         filePath: 'abc.xlsx'
    //       })
    //     }
    // }

    // for(let i in arrayoftr){

    //     con
    // }
}
console.log(infobj);
let xlsx = json2xlsx(infobj);

fs.writeFileSync('data3.xlsx', xlsx, 'UTF-8');

//````````````````````````````````````````````````
