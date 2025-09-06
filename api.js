let url = "https://api.potterdb.com/v1/";
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("#result")


let books = "books";
let movies = "movies";
let characters = "characters";
btn.addEventListener("click",()=>{
    getAPI();
}
);
async function getAPI() {
    ul.innerText = "";
    let result = await axios.get(url+inp.value);
    console.log(result.data);  
    show(result.data.data);  
}
function show(resData){
    if(inp.value == characters){
        for(one of resData){
            let  li = document.createElement("li");
            li.innerText = one.attributes.name;
            ul.appendChild(li);
            
        }
    } else if(inp.value == movies){
        for(two of resData){
            let  li = document.createElement("li");
            li.innerText = two.attributes.title;
            ul.appendChild(li);
}
} else if(inp.value == books){
        for(three of resData){
            let  li = document.createElement("li");
            li.innerText = three.attributes.title;
            ul.appendChild(li);
}
}else{
    alert("wrong search.");
}
}