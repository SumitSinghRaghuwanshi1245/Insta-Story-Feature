var arr = [ 
    {dp:"images/iron.jpeg" , story:"images/thor.jpeg"},
    {dp:"images/cap.jpeg" , story:"images/hulk.jpeg)"},

    {dp:"images/hulk.jpeg" , story:"images/cap.jpeg"},
    {dp:"images/thor.jpeg" , story:"images/iron.jpeg"}
];
 var storiyan = document.querySelector("#storiyan")
var clutter = "";                             // back tick interview fav - known as template literals
arr.forEach(function(elem, idx){
   clutter += `<div class="story">
                <img id="${idx}"  src="${elem.dp}"  alt="">       
            </div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets){
document.querySelector("#full-screen").style.display = "block"
document.querySelector("#full-screen").style.backgorundImage = `url(${arr[dets.target.id].story})`;

setTimeout(function(){
document.querySelector("#full-screen").style.display = "none"
},3000)

})