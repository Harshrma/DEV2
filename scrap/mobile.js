let cheerio=require("cheerio");
const request = require("request");
let arr=[];
url="https://www.amazon.in/s?bbn=1389432031&rh=n%3A1389432031%2Cp_89%3Arealme&dc&pf_rd_i=1389401031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=0a637d11-7376-4d8d-8a9d-c7d9ccc35b9f&pf_rd_r=DREJ3HK709SH94TJXQMA&pf_rd_s=merchandised-search-3&qid=1625844266&rnid=3837712031&ref=lp_1389432031_nr_p_89_3"
request(url,cllback);

function cllback(err,resp,html){
     
    const $=cheerio.load(html);
    let temp=$(".a-section.a-spacing-medium");
    // let name=$(".a-section.a-spacing-medium .a-size-base-plus.a-color-base.a-text-normal");
    // let price=$(".a-section.a-spacing-medium .a-price-whole");
    for(let i=0;i<temp.length;i++){
        arr.push({
            name:$(temp[i]).find(".a-size-base-plus.a-color-base.a-text-normal").text(),
            pric:$(temp[i]).find(".a-price-whole").text()
        })
     //   let txt=$(temp[i]).find(".a-size-base-plus.a-color-base.a-text-normal").text();
       // let pri=$(temp[i]).find(".a-price-whole").text();
       // console.log(txt);
     //   console.log(pri);
    }
    console.log(arr);
    console.log(arr.length);
    // console.log(price.length);
    // console.log(name.length);
    // console.log(temp.length);

}