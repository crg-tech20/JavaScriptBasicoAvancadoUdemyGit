/**
 * 
 * 
 */

let a = document.querySelector('.link'); // . é para classe, o # é para id, a propria tag, que pode ser ('a')

console.log(a);
console.log(a.innerText); // o texto do link

//console.log(a.parentNode); //body, o pai do elemento

//console.log(a.parentNode.parentNode); //html

//console.log(a.parentNode.parentNode.parentNode);// Document

//console.log(a.parentNode.parentNode.parentNode.parentNode);// null

//console.log(a.parentNode.parentNode.childNodes);

//console.log(a.parentNode.parentNode.firstChild); // head

//console.log(a.firstChild); 

//console.log(a.parentNode.parentNode.lastChild); // body

console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling); // próximo irmão

//console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling); // irmão anteriors

