const person = {
  firstName: "Malala",
  lastName: "Yousafzai",
  age: 23,
  email: "mal@mal.com",
  hobbies: ["philanthropy", "international politics", "human rights"],
  address: {
    city: "Oxford",
    country: "England",
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
};

let val;

val = person;
// Get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.address.country;
val = person.address["city"];
val = person.getBirthYear();

val = console.log(val);

const bears = [
  { name: "Black", likes: "berries" },
  { name: "Grizzly", likes: "salmon" },
  { name: "Brown", likes: "honey" },
];

for (let i = 0; i < bears.length; i++) {
  console.log(bears[i].likes);
}
