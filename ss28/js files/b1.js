let person = {
 name: "John Doe",
age: 25,
job : "Developer"
}
for(let key in person) {
    console.log(key, ":", person[key])
}