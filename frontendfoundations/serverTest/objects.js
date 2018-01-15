let person = {
  firstName: "Sam",
  lastName: "Smith",
  age: 22,
  weight: 190,
  pets: [
    {
      name:"Fido",
      type: "dog"
    },
    {
      name: "Spot",
      type: "dog"
    },
    {
      name: "Chewy",
      type: "goldfish"
    }
  ],
  computer: {
    os: "windows 7",
    ram: "8gb",
    storage: {
      type: "ssd",
      capacity: 256
    }
  }
};

console.log(person);
console.log(person.firstName);
person.middleInitial = "C";
console.log(person);
console.log("The SSD is " + person.computer.storage.capacity);

console.log(person.firstName + " has the following pets:");
for(let i = 0; i < person.pets.length; i++) {
  console.log(person.pets[i].type + " : " + person.pets[i].name)
}

for(let pet of person.pets) {
  console.log(pet.type + " : " + pet.name);
}

let artists = [
  {
    name: "Metallica",
    genres: [
      "Rock", "Metal", "Hard Rock"
    ],
    albums: [
      {
        title: "Enter Sandman",
        releaseDate: "lskkdjflk"
      }
    ]
  },
  {
    name: "White Snake",
    genres: [
      "Rock", "Metal", "Hard Rock"
    ],
    albums: [
      {
        title: "Enter Sandman",
        releaseDate: "lskkdjflk"
      }
    ]
  },
  {
    name: "Bon Jovi",
    genres: [
      "Rock", "Metal", "Hard Rock"
    ],
    albums: [
      {
        title: "Enter Sandman",
        releaseDate: "lskkdjflk"
      }
    ]
  }
];

for(let artist of artists) {
  console.log(artist.name);
  console.log('--------------');
  for(let genre of artist.genres) {
    console.log(genre);
  }
}

let grades = [89, 74, 84, 98, 56, {name: "Sam"}];

for(let grade of grades) {
  console.log(grade);
  grade = grade / 2;
  console.log(grade);
  console.log('------------- :)');
}
