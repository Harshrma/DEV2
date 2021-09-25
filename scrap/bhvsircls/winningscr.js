let request=require("request");
let cheerio=require("cheerio");
const { load } = require("cheerio");
request("https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-rajasthan-royals-24th-match-1254081/full-scorecard",cllback);
function cllback(error,response,html){
   let  $=cheerio.load(html);

   const loosingteam=$(".team.team-gray .name-link").text();
   const bothteamobj=$(".team .name-link");
//    console.log(loosingteam);
//    console.log(bothteamobj);
   const bothteamscoreobj=$(".match-info.match-info-MATCH.match-info-MATCH-half-width .score-detail");

   const winteamarr= $(bothteamobj[0]).text()==loosingteam ? [$(bothteamobj[1]).text() , $(bothteamscoreobj[1]).text()] : [$(bothteamobj[0]).text(),$(bothteamscoreobj[0]).text()]
   console.log(winteamarr);
  // console.log()

   
}