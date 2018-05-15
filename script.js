console.log("script loaded.");

let currentPerson = {
  name: "Eric Lewis",
  email: "eric.andrew.lewis@gmail.com",
  phone: "123 456 7890",
  birthday: "1986-06-22 07:04:05",
  address: "123 First Avenue, New York, NY",
  image: "images/myself.jpg"
};

// Part 0 - visit  in your browser and take a glance
// at the kind of data the Random User API provides.

// Part 1 (10 minutes) - make a function called getRandomPerson.
// - It should make an AJAX request to 'https://randomuser.me/api/?nat=us' with fetch.
// - Add a function to the promise chain with .then() that resolves the response body as JSON.
// - Add another function to the promise chain that logs the JSON object to the console.
// - The function should return the promise.

// Part 2 (15 minutes) - In the last callback on the Promise chain in getRandomPerson,
// create a person object that extracts data from the JSON.
//
// The object should include the random person's name (first and last), email, phone,
// birthday, address (street, city, and state), and image (use the large version).
//
// Return the person object in the callback function, so that whenever getRandomPerson()
// is called, it will resolve with the format of data we are interested in.

// Part 3 (10 minutes) - Write a click handler for the button that calls getRandomPerson.
// Add a .then() callback on this invocation of getRandomPerson that logs
// the person object to the console.

// Part 4 (20 minutes) - write a function updatePerson. It should:
// - be called in the click handler's .then() callback function with the person object
//   as an argument.
// - update the element with the id of 'smalltext' to have the text 'My name is'
// - update the element with the id of 'bigtext' to have the the person's name as its text
// - update the element with the id of 'photo' to have the user's image as it's background-image
// - update the outer scoped variable currentPerson to the value of person.

// part 5 (25 minutes) - write a function called addEventListeners, which is called immediately.
//
// It will add hover event listeners for each of the icons on the page:
// - when hovering over #name, the #smalltext should say 'My name is',
//   and the #bigtext should show the currentPerson's name as its content
//
// - when hovering over #email, the #smalltext should say 'My email is',
//   and the #bigtext should show the currentPerson's email as its content
//
// - when hovering over #birthdate, the #smalltext should say 'My birthday is',
//   and the #bigtext should show the currentPerson's birthday as its content.
//   The birthday should be formatted MM/DD/YYYY, e.g. 5/15/2018. Hint: use
//   the JavaScript Date object and use date object methods https://www.w3schools.com/jsref/jsref_obj_date.asp
//
// - when hovering over #address, the #smalltext should say 'My addresss is',
//   and the #bigtext should show the currentPerson's address as its content
//
// - when hovering over #phone, the #smalltext should say 'My phone number is',
//   and the #bigtext should show the currentPerson's phone number as its content

// BONUS
