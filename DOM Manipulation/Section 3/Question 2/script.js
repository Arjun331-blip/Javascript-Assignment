const skills = document.querySelector("#skills");

const tech = ["HTML", "CSS", "JAVASCRIPT", "REACT"];

tech.forEach(value => {
    let li = document.createElement("li");
    li.textContent = value;
    skills.appendChild(li);
})