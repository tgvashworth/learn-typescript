// How a Person object should look
interface Person {
  name: string;
  age?: number;
  greeting: () => any;
}

interface Animal {
  name: string;
  type?: string;
  noise: () => any;
}

var poke: {
  (person: Person): string;
  (animal: Animal): string;
} = function(thing) {
  return thing.name + " said \"" + (thing.greeting || thing.noise)() + "\"";
}

var prod: (person: Person) => string = function(person) {
  return person.name + " said " +
         person.greeting();
}

var tom: Person = {
  name: "Tom",
  age: 19,
  greeting: function () {
    return 'Hello!';
  }
};

var dave: Animal = {
  name: "Dave",
  type: "Cow",
  noise: function () {
    return 'Moo!';
  }
};

console.log(prod(tom));
console.log(poke(dave));