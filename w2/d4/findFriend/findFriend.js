const findFriend = (data, named, field) => {
  data.forEach(element => {
    if (element.name === named){
      const bestFriend = element.friends[0];
      data.forEach(ele => {
        if (ele.name === bestFriend) {
          return console.log( { name: element.friends[0], [field]: ele[field] });
          // console.log(`Name: ${element.friends[0]} and their phone number is ${ele[field]}`)
        } 
      })
    }
  });
};

const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];
findFriend(contacts, 'Abbott', "phone") //should return { name: "Costello", phone: "767 676 7676" }
findFriend(contacts, "Buster", "email")
findFriend(contacts, "Bob", "phone")
findFriend(contacts, "Costello", "birthday")