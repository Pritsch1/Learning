const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  const fullName = firstAndLast.split(" ");
  let firstName = fullName[0], lastName = fullName[1];
  this.getFullName = function() 
  {
    return firstName + " " + lastName;
  }
  this.getFirstName = function() 
  {
    return firstName;
  }
  this.getLastName = function() 
  {
    return lastName;
  }
  this.setFirstName = function(first) 
  {
    firstName = first; 
  }
  this.setLastName = function(last) 
  {
    lastName = last; 
  }
  this.setFullName = function(firstAndLast) 
  {
    const fullName2 = firstAndLast.split(" ");
    firstName = fullName2[0]; 
    lastName = fullName2[1];

  }
};

const bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
bob.setFirstName("Haskell Curry");
console.log(bob.getFirstName());
