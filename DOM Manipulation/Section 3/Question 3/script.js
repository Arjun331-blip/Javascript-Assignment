let skills = document.querySelector("#skills");

let li1 = document.createElement("li").textContent = "HTML";
let li2 = document.createElement("li").textContent = "REACT";
let li3 = document.createElement("li").textContent = "CSS";
let li4 = document.createElement("li").textContent = "JAVASCRIPT";

skills.append(li1, li2);
skills.prepend(li3, li4);