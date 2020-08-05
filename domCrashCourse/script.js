// const heading=document.getElementById("heading");
// console.log(heading);
// console.log(typeof heading);

// heading.className="changeBG";
// heading.className+=" changeFT";

// console.log(heading.classList);
// heading.classList.add("changeCL");
// heading.classList.remove("changeCL");

// const heading2=document.getElementById("heading");
// console.log(heading2);
// const list=document.getElementById('list');
// list.textContent="Hi there";
// console.log(list.textContent);
// list.innerHTML="<h1>Hi there</h1>";
// console.log(list.innerHTML);
// const list=document.querySelector(".list");
// console.log(list);
// const li=document.querySelector("li");
// console.log(li);
// const lis=document.querySelectorAll("li");
// console.log(lis);

// const listItems=document.querySelectorAll(".list-items");
// console.log(listItems);
// li.textContent="hey";
// const heading=document.getElementById("heading");
// heading.style.color="red";
// heading.style.backgroundColor="black";


// const lis=document.querySelectorAll("li");
// console.log(lis);

// for (var i=0;i<lis.length;i++){
//     lis[i].style.backgroundColor="royalblue";
// }


// lis[0].style.cssText="background-color:coral;color:white;font-size:25px";

// const heading=document.querySelector(".heading");
// const btn=document.querySelector(".btn");

// btn.onclick=()=>{
//     console.log("Clicked");
// };
// btn.onmouseover=()=>{
//     heading.style.cssText="background-color: brown;color:white";
// };
//  btn.onmouseout=()=>{
//      heading.style.cssText="background-color:transparent;color:black";
//  };

//  const clickButton=()=>{
//      console.log("Clicked");
//  };
 
// btn.addEventListener("click",e=>{
//     //heading.style.cssText="background-color:brown;color:white";
//     console.log(e.target);
// });

// const paragraph=document.querySelector(".paragraph");

// console.log(paragraph.getAttribute("id"));
// console.log(paragraph.getAttribute("class"));
// paragraph.setAttribute("title","MyParagraph");

// paragraph.removeAttribute("title");


// console.log(paragraph.hasAttribute("title"));

const listItem =document.getElementById("list-item");
// console.log(listItem.parentNode);
// console.log(listItem.parentNode.parentNode);
// console.log(listItem.parentElement);

const list=document.querySelector(".list");
// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.firstChild);
// console.log(list.firstElementChild);
// console.log(listItem.previousSibling);
// console.log(listItem.nextSibling);
// console.log(listItem.nextElementSibling);
// console.log(listItem.previousElementSibling);
const newEl=document.createElement("li");
const text=document.createTextNode("Blog");
newEl.appendChild(text);
console.log(newEl);

list.appendChild(newEl);
list.insertBefore(newEl,list.children[1]);
list.removeChild(newEl);
console.log("list");
