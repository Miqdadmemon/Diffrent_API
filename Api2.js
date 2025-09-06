// let url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("#foodFacts");

// brands = "brands";
// origins = "origins";
// nutrients = "nutriments";

// btn.addEventListener("click",()=>{
//         foodFact();
// });
// async function foodFact() {
//     try {
//         let result =  await axios.get(url + inp.value);
//         console.log(result.data); 
//         present([result.data.product.brands]);
//         // present(brands);
        
//     } catch (error) {
//         console.log("error",error);
//         return [];
//     }
// }

// function present(brands){
//     if(inp.value == brands){
//         for(one of brands){}
//             let li = document.createElement("li");
//             ul.innerText = "";
//             li.innerText = one.data.product.brands;
//             ul.appendChild(li);
//     }else if(inp.value == origin){
//         for(two of brands){
//             let li = document.createElement("li");
//             ul.innerText = "";
//             li.innerText = two.data.product.rigins;
//             ul.appendChild(li);
//                     }
       
//     }else if(inp.value == nutrients){
//         for(three of brands){
//             let li = document.createElement("li");
//             ul.innerText = "";
//             li.innerText = three.data.product.nutrients;
//             ul.appendChild(li);
//         }
        
//     }else{
//         alert("error wrong search");
//     }


//     }

//-----------------------------------------checking processss------------------------------------------------------//


// let url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("#foodFacts");

// btn.addEventListener("click",()=>{
//     foodFact();
// });
// function show(datas)
// {
//     ul.innerText = " ";
//     let li = document.createElement("li");
//     li.innerText = datas;
//     let add = ul.appendChild(li);
//     console.log(add);
// }

// async function foodFact() {
//     try {
//         let result = await axios.get(url+inp.value);
//         console.log(result.data.product.brands);
//        let final = show(result.data.product.brands);
//        return final;
        
//     } catch (e) {
//         console.log(e);
//         return [];

        
//     }
    
// }
//-----------------------------------------checking processss------------------------------------------------------//

//-------------------------------------------working--------------------------------------------------------------------------//

// let url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("#foodFacts");
// let brands = "brands";
// let origins = "origins";
// let nutriments = "nutriments"

// btn.addEventListener("click",()=>{
//     foodFact();
// });
// function show(datas)
// {
//     if(inp.value == brands){
//         ul.innerText = " ";
//         let li = document.createElement("li");
//         li.innerText = datas.brands;
//         let add = ul.appendChild(li);
//         console.log(add);
//     }else if(inp.value == origins){
//         ul.innerText = " ";
//         let li = document.createElement("li");
//         li.innerText = datas.origins;
//         let add = ul.appendChild(li);
//         console.log(add);
//     }else if (inp.value == nutriments){
//         ul.innerText = "";  
//         for (let key in datas.nutriments) {
//             let li = document.createElement("LI");
//             li.innerText = key + ": " + datas.nutriments[key];
//             ul.appendChild(li);
//     }
// }else{
//     alert ("error wrong search!!");
// }
// }

// async function foodFact() {
//     try {
//         let result = await axios.get(url+inp.value);
//         console.log(result.data.product);
//        let final = show(result.data.product);
//        return final;
        
//     } catch (e) {
//         console.log(e);
//         return [];

        
//     }
    
// }






//------------------------------------------DONE👍🏾----------------------
let url = "https://world.openfoodfacts.org/api/v0/product/";
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("#foodFacts");

btn.addEventListener("click",()=>{
    foodFact();
});
function show(datas)
{
    ul.innerText = " ";
    if(datas.product_name){
        let li = document.createElement("li");
        li.innerText = datas.product_name;
        ul.appendChild(li);
    }
    if(datas.brands){
       
        let li = document.createElement("li");
        li.innerText = datas.brands;
        ul.appendChild(li);
        
        console.log(datas.brands);
    }if(datas.origins){
        let li = document.createElement("li");
        li.innerText = datas.origins;
        ul.appendChild(li);
        console.log(datas.origins);
    }if (datas.nutriments){  
        for (let key in datas.nutriments) {
            let li = document.createElement("LI");
            li.innerText = key + ": " + datas.nutriments[key];
            ul.appendChild(li);
    }
}else{
    alert ("error wrong search!!");
}
}

async function foodFact() {
    try {
        let result = await axios.get(url+inp.value+".json");
        console.log(result.data.product);
       let final = show(result.data.product);
       return final;
        
    } catch (e) {
        console.log(e);
        return [];

        
    }
    
}