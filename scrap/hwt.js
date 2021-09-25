let request=require("request");
let fs=require("fs");
let cheerio=require("cheerio");
let url='https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-4th-test-1239546/full-scorecard'
request(url, cllback);
function  cllback (error, response, html ) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

  if(error){
      console.log("error");
  }else if(response.statusCode==404){
      console.log("page not found");c
  }else{
     // console.log(response);
     //console.log(html);
     dataextract(html);
  }
}
function dataextract(html){

    let search=cheerio.load(html);

    let bowlertable=search(".table.bowler tr");
    //let lbc=search(elemarr[0]).text();//array bnne k bad sare function ht jate h like text() to un function ko lane k liye search k andr dalte h fer se
    // let htmltbl="";
    // for(let i=0;i<bowlertable.length;i++){
    //     htmltbl+=search(bowlertable[i]).html();
    // }
    // fs.writeFileSync("bowler.html",htmltbl);

   // console.log(bowlertable.length);
   let hwt=0;
   let hwtname="";
   for(let i=0;i<bowlertable.length;i++){
    let col=search(bowlertable[i]).find("td");
    let name=search(col[0]).text();
    let wkt=search(col[4]).text();
    // console.log();
    console.log(name+" "+wkt);  
    if(wkt>=hwt){
        hwt=wkt;
        hwtname=name;
    }
     }
     console.log("hwt = > ",hwt);
     console.log("hwtname => ",hwtname);

}