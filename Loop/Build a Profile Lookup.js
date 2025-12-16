let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  // Loop through each contact in the contacts array
  for (let i = 0; i < contacts.length; i++) {

    // Check if the current contact's firstName matches the provided name
    if (contacts[i].firstName === name) {

      // If the property exists on the found contact, return its value
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        // If name exists but property does not
        return "No such property";
      }
    }
  }

  // If no contact with the given name is found
  return "No such contact";
}


