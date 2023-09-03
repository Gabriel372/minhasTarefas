var box =  JSON.parse(localStorage.getItem('box')) || [] ;
updateScreen()

function idGenerator() {
let timer = new Date() ;
let id = timer.getMinutes().toString()+
timer.getSeconds().toString()+
timer.getMilliseconds().toString() ;
return id ;
}
function addItem() {
const item = {text:'',id:idGenerator(),done:false} ;    
const txt = document.querySelector('input') ;
if (txt.value) {
item.text = txt.value;
box.push(item) ;
localStorage.setItem('box',JSON.stringify(box));
updateScreen() ;
txt.value = '' ;
txt.focus() ;}
}
function updateScreen() {
var ul = `<ul class='mt-3 mb-0 p-0'>` ;
var div = document.querySelector('#listDiv');
box.forEach(item => 
{ ul += `<li  class='d-flex justify-content-between ' done=${item.done}><span class=${item.done && 'done'} >${item.text}</span>
<div class='d-inline-block'><button class='btnLi ${item.done && 'chekOn'}' onclick='doneTask(${item.id})'>
<i class="bi bi-check-square-fill text-success"></i></button>
<button class='btnLi' onclick='removeTask(${item.id})'><i class="bi bi-trash3-fill text-danger"></i></button>
</div></li>`}) ;
ul += '</ul>' ;
div.innerHTML= ul ;
}
function removeTask(itemId) {
box = box.filter(item => item.id != itemId  );
localStorage.setItem('box',JSON.stringify(box));
updateScreen() ;
}
function doneTask(itemId) {
box = box.map(item =>{ 
if (item.id == itemId ){item.done = !item.done}
return item  
})
localStorage.setItem('box',JSON.stringify(box));
updateScreen()
}
