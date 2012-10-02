module Beastly {
  export class Thing {
    name = "Unidentified Thing";
    age = 0;
    noise = "Ptt.";
    constructor(name?: string, age?: number, noise?: string) {
      this.name = name || this.name;
      this.age = age || this.age;
      this.noise = noise || this.noise;
    }
    prod() {
      return this.noise;
    }
  }

  export class Grunter extends Thing {
    noise = "Grunt.";
  }
}

var lump = new Beastly.Thing();
var phone = new Beastly.Thing("phone", 1);
var pig = new Beastly.Thing("pig", 5, "Oink.");
var louis = new Beastly.Grunter("louis", 18);

console.log(lump.prod());
console.log(phone.prod());
console.log(pig.prod());
console.log(louis.prod());