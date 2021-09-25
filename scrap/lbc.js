let request=require("request");
let cheerio=require("cheerio");
let url='https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary'
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

    let elemarr=search(".match-comment-wrapper .match-comment-long-text");
    let lbc=search(elemarr[0]).text();//array bnne k bad sare function ht jate h like text() to un function ko lane k liye search k andr dalte h fer se
    console.log(lbc);
  // console.log(elemarr.length);

}

