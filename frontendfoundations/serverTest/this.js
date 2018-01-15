let person = {
  firstName: "Sam",
  lastName: "Smith",
  age: 5,
  increaseAge: function() {
    this.age++;
  },
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.firstName);
console.log(person.age);
person.increaseAge();
console.log(person.age);
console.log(person.getFullName());
