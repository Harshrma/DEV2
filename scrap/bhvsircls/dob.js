let request=require("request");
let cheerio=require("cheerio");

request("https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-rajasthan-royals-24th-match-1254081/full-scorecard",cllback);
function cllback(error,response,html){
   let  $=cheerio.load(html);
   const hrefofbtsman=$(".table.batsman tbody tr td a");
//    console.log(hrefofbtsman.attr);
const arroflink=[];
const arrofinfo=[];
console.log(hrefofbtsman.length);
   for( let i=0;i<hrefofbtsman.length;i++){
      
  // console.log($(hrefofbtsman[i]).attr("href"));
   arroflink.push({
       link : "https://www.espncricinfo.com/"+$(hrefofbtsman[i]).attr("href")
   })

   }
   for(let j in arroflink){
   // console.log(arroflink[j].link); 

    request(arroflink[j].link,nextpage);
   }
//    const arrofinfo=[];
let c=0;
   function nextpage(err,response,data){
      // console.log(data);
      c++;

    const $=cheerio.load(data);
    const dob=$(".player-card-description.gray-900");
    //console.log($(dob[1]).text());

    arrofinfo.push({
        name: $(dob[0]).text(),
        dateofBDY: $(dob[1]).text(),
        AGE :$(dob[2]).text(),
        BATTINGSTYLE : $(dob[3]).text(),
        FIELDINGPOSITION : $(dob[4]).text(),


    })
   // console.log(arrofinfo[1].name);
   if(c==arroflink.length){
    for(let i in arrofinfo){
        console.log(arrofinfo[i].name +"--->"+ arrofinfo[i].dateofBDY);
   }

   }
     






   }
   
   
}


