var poke = function (thing) {
    return thing.name + " said \"" + (thing.greeting || thing.noise)() + "\"";
};
var prod = function (person) {
    return person.name + " said " + person.greeting();
};
var tom = {
    name: "Tom",
    age: 19,
    greeting: function () {
        return 'Hello!';
    }
};
var dave = {
    name: "Dave",
    type: "Cow",
    noise: function () {
        return 'Moo!';
    }
};
console.log(prod(tom));
console.log(poke(dave));
