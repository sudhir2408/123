import navbar from "../components/navbar.js";
console.log(navbar());
document.getElementById("navbar").innerHTML=navbar();

import {getData,append} from "./fetch.js";
const url=`https://www.themealdb.com/api/json/v1/1/random.php`;
let cont = document.getElementById("cont-1");

getData(url).then((res)=>{
    console.log(res)
    append(res,cont)
});
