const student = [
    {
        lastName: "Perez",
        firstName: "Anthony"
    },
    {
        lastName: "Smith",
        firstName: "John"
    },
    {
        lastName: "Doe",
        firstName: "Jane"
    }
];

const container = document.querySelector("#student_container");

student.forEach(function(item) {
    let name = document.createElement("div");
    name.calssName = "format";


    let html = `        
        <p class='details'>${item.firstName}</p>
        <p class='details'>${item.lastName}</p>
        <hr>
        `

    name.innerHTML = html;
    container.appendChild(name);    
})

const pets = ['cat', 'dog', 'bird'];
const animals = new Array ('pig', 'goat', 'sheep');

pets.push('lizard');

pets[2] = 'bunny';
console.log(pets)