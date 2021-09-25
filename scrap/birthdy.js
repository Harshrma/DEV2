let request=require("request");
let fs=require("fs");
let cheerio=require("cheerio");
const { BADQUERY } = require("dns");
const { brotliDecompressSync } = require("zlib");
let url='https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-5th-test-1239547/live-cricket-score'
request(url, cllback);
function  cllback (error, response, html ) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

  if(error){
      console.log("error");
  }else if(response.statusCode==404){
      console.log("page not found");
  }else{
     // console.log(response);
     //console.log(html);
     dataextract(html);
  }
}
function dataextract(html){

    let search=cheerio.load(html);

    let bowlertable=search(".w-100.table.batsman tr");
    //let lbc=search(elemarr[0]).text();//array bnne k bad sare function ht jate h like text() to un function ko lane k liye search k andr dalte h fer se
    // let htmltbl="";
    // for(let i=0;i<bowlertable.length;i++){
    //     htmltbl+=search(bowlertable[i]).html();
    // }
    // fs.writeFileSync("bowler.html",htmltbl);

     console.log(bowlertable.length);
  
   for(let i=0;i<bowlertable.length;i++){
    let col=search(bowlertable[i]).find("td");
    let att=search(col[0]).find("a");
    
    //let link=search(att).attr("href");
    let link=att.attr("href");
    let fulllink=`https://www.espncricinfo.com${link}`;
    
   // console.log(fulllink);
    request(fulllink,cb);
    
     }

     function cb(error,response,html){
         if(error){
             console.log(error);
         }else if(response.statusCode==404){
             console.log("page not found");
         }else{
             birthday(html);
         }
     }
     function birthday(html){
         let srch=cheerio.load(html);
         let bd=srch(".player_overview-grid h5");
         let name=srch(bd[0]).text();
         let ans=srch(bd[2]).text();
         console.log(name , ans);
         console.log("`````````````````````````````````````````````");
     }
    

}