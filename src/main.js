
var text = document.getElementById("animate-text");

const texts = ["JQuery", "Scss", "Bootstrap", "MongoDb", "Node Js", "Express Js"];
let index = 0;

const textLoad = () => {
    text.innerHTML = texts[index];
    index = (index + 1) % texts.length;
};

setInterval(textLoad, 4000);

textLoad();

// var text = document.getElementById("animate-text");
// const textLoad=()=>{
//     setTimeout(()=>{
//         text.innerHTML="JQuery"
//     },0)
//     setTimeout(()=>{
//         text.innerHTML="Scss"
//     },4000)
//     setTimeout(()=>{
//         text.innerHTML="Bootstrap"
//     },8000)
//     setTimeout(()=>{
//         text.innerHTML="MongoDb"
//     },12000)
//     setTimeout(()=>{
//         text.innerHTML="Node Js"
//     },16000)
//     setTimeout(()=>{
//         text.innerHTML="Express Js"
//     },20000)
// }
// setInterval(textLoad, 24000);
// textLoad()

 

 const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
 })
 const hiddenElement= document.querySelectorAll(".hidden");
 hiddenElement.forEach(el=>observer.observe(el))