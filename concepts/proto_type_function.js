function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");

// It won't bind function to member
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
// Need to use this
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName(),);
