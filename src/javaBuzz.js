function Javabuzz() {};

Javabuzz.prototype.isDivisbleByThree = function(number) {
   return (number % 3 === 0)
};

var javabuzz = new Javabuzz();
console.log(javabuzz.isDivisbleByThree(3));

Javabuzz.prototype.isDivisbleByFive = function(number) {
  return (number % 5 === 0)
 };
var javabuzz = new Javabuzz();
console.log(javabuzz.isDivisbleByFive(5));

Javabuzz.prototype.isDivisibleByThreeAndFive = function(number) {
  if (number % 3 === 0 && number % 5 === 0){
    return true
  } else {
    return false
  };
};
