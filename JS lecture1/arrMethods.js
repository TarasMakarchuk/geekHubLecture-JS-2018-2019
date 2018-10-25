// 1 example of the method "pop"

var myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"]; // declare myFriends variable with assignment to it as the value of an array of 5 elements
myFriends.pop(); // removed the last element of the array "Natasha"
console.log( myFriends ); // will print the first 4 elements of the array

// 2 example of the method "push"

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
myFriends.push( "Gennady" ); // last array element added "Gennady"
console.log( myFriends ); // will output 6 array elements

// 3 example of the method "concat"

var array = ["Andrew", "Sergei", "Ilya"];
var newArray = array.concat("Ira", "Natasha"); // create a new array to copy to elements from the previous array
console.log( newArray ); // will output 5 array elements

// 4 example of the method "indexOf"

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
console.log( myFriends.indexOf("Ilya") ); // returns the number of the element "Ilya" in the array myFriends

// 5 example of the method "join"

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
var string = myFriends.join('; ');
console.log( string ); // an array to stick together in a string [Andrew; Sergei; Ilya; Ira; Natasha]

// 6 example of the method "forEach"

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];

myFriends.forEach(function(item, i, myFriends) { // forEach will call callback and give it 3 parameters (item, i, myFriends)
    console.log( i + ": " + item + " (array of my friends: " + myFriends + ")" );
}); /*there will be a perbor of the myFriends array */

// 7 example of the method "filter"

array = [-100, -75, -50, 50, 75, 100];
var positiveArray = array.filter(function(number) { // filtering an array through a function
    return number > 0;
});
console.log( positiveArray ); // will return only positive numbers

// 8 example of the method "find"

array = [3, 7, 32, 98, 100, 120, 10, 6, 5, 3];
var a = array.find(function(e) { // calls the callback function din times for each element in the array, until it returns true */
    return e === 10
});
console.log(a); // will return the value 10

// 9 example of the method "map"

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
var myFriendsLengths = myFriends.map(function(myFriends) { // create a new array which will consist of the results of the call callback (item, i, myFriends) for each item myFriends.
    return myFriends.length;
});
console.log( myFriendsLengths ); // returns an array of 6 elements which lengths are 6, 6, 4, 3, 7

// 10 example of the method "slice"

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
var myBestFriends = myFriends.slice(0, 4); // copies a section of the array from 0 to 4, not including 4, the original array does not change
console.log( myBestFriends ); // will return "Andrew", "Sergei", "Ilya", "Ira"

// 11 example of the method "splice"
// 11.1 deleting items

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
myFriends.splice(1, 2); // starting from position 1, delete 2 items
console.log( myFriends ); // will return "Andrew", "Ira", "Natasha"

// 11.2 insert items

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
myFriends.splice(0, 2, "Stepan", "Vasiliy"); // delete the first 2 elements and add others instead
console.log( myFriends); // will return "Stepan", "Vasiliy", "Ilya", "Ira", "Natasha"

// 11.3 return array from deleted items

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
var removed = myFriends.splice(0, 3); // removes the first 3 items
console.log( removed ); // will return "Andrew", "Sergei", "Ilya" <-- array of removed elements

// 11.4 inserting items without deleting

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
myFriends.splice(3, 1, "Gregory", "Gennady"); // from position 2 delete 0 insert "Gregory", "Gennady"
console.log( myFriends ); // returns 6 items "Andrew", "Sergei", "Ilya", "Gregory", "Gennady", "Natasha"

// 12 example of the method "shift"

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
myFriends.shift(); // delete the first element of the array "Andrew"
console.log( myFriends ); // will return "Sergei", "Ilya", "Ira", "Natasha"

// 13 example of the method "unshift"

myFriends = ["Andrew", "Sergei", "Ilya", "Ira", "Natasha"];
myFriends.unshift("Stepan"); // added the element "Stepan" to the beginning of the array
console.log( myFriends ); // will return "Stepan", "Andrew", "Sergei", "Ilya", "Ira", "Natasha"
