// let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("#defination");
// btn.addEventListener("click",()=>{
//     getDef();
// })
// function showDef(def){
//     let li = document.createElement("li");
//     for(def of present ){
//         li.innerText = def.definition;
//         console.log(li);
//         c
//     }

// }

// async function getDef() {
//     try {
//         let defRes = await axios.get(url+inp.value);
//         console.log(defRes.data[0].meanings);
//         let present = showDef(defRes.data[0].meanings);
//         return present;
        
//     } catch (e) {
//         console.log(e);
//         return [];
        
//     }
    
// }

// --------------------------checking processs---------------------------------------------

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("#defination");
 btn.addEventListener("click",()=>{
     getDef();
 });
 function showDef(x){
    ul.innerText = "";
    for(let meaning of x){
        for(let d of meaning.definitions){
            let li = document.createElement("li");
            li.innerText = d.definition;
            ul.appendChild(li);
        }
       
    }
 }


async function getDef() {
    try {
        let defRes = await axios.get(url+inp.value);
        console.log(defRes.data[0].meanings);
        showDef(defRes.data[0].meanings);
        
    } catch (e) {
        console.log(e);
        return [];
        
    }
}