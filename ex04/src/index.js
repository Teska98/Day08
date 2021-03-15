// Only change code below this line
   function localScope() {
     var myVariable = "I am here!";
   }
localScope (myVariable);
// Only change code above this line
if (typeof myVariable != "undefined"){
  console.log(˙outside localScope˙, myVariable)
} else {
  console.log(˙outside localScope UNDEFINED!!!˙)
}


module.exports = localScope;
