console.log("================task1==================");

function myName(){
    console.log("My name is Muzaffar Ali!");
}
myName();

function developer(){
    console.log("I am Mern full stack developer!");
}
developer();

function personalDetails(firstName, lastName, collageName){
    var result = firstName +  " " + lastName + " " + collageName
    console.log(result);
    
}
personalDetails("Muzaffar", "Ali", "chandigarhUniversity");

function addThreeValues(message, n1, n2, n3){
    var result = n1+n2+n3;
    console.log(message, result);
}
addThreeValues("The addition of three parameters is:", 10.23,600,40);
addThreeValues("The addition of three parameters is:", "Hello ", "Good ", "Morning");