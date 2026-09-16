const settings = {
  theme: "dark",
  language: "English",
  notifications: true,
};

console.log(settings);

Object.entries(settings).forEach((value, ind) => {
  // let index = 1
  console.log(value[0], value[1]);
});
