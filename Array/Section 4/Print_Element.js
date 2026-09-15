let color = ["red", "green", "blue", "yellow", "gray"];
console.log(typeof color, color);
color.forEach((value) => {
    console.log(typeof value, value);
})

// Question 19. Display Elements with Their Index
color.forEach((value, index) => {
    console.log(value, index);
})