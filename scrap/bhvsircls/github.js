let request=require("request");
let cheerio=require("cheerio");

request("https://github.com/topics",cllback);
function cllback(err,response,html){
    const $=cheerio.load(html);
    let anchortags=$(".no-underline.d-flex.flex-column.flex-justify-center");
   // console.log(arrayoftr.length);
   const arrofhref=[];
   console.log($(anchortags[0]).attr("href"));
  
   console.log(arrofhref);
}
