var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Beastly;
(function (Beastly) {
    var Thing = (function () {
        function Thing(name, age, noise) {
            this.name = "Unidentified Thing";
            this.age = 0;
            this.noise = "Ptt.";
            this.name = name || this.name;
            this.age = age || this.age;
            this.noise = noise || this.noise;
        }
        Thing.prototype.prod = function () {
            return this.noise;
        };
        return Thing;
    })();
    Beastly.Thing = Thing;    
    var Grunter = (function (_super) {
        __extends(Grunter, _super);
        function Grunter() {
            _super.apply(this, arguments);

            this.noise = "Grunt.";
        }
        return Grunter;
    })(Thing);
    Beastly.Grunter = Grunter;    
})(Beastly || (Beastly = {}));

var lump = new Beastly.Thing();
var phone = new Beastly.Thing("phone", 1);
var pig = new Beastly.Thing("pig", 5, "Oink.");
var louis = new Beastly.Grunter("louis", 18);
console.log(lump.prod());
console.log(phone.prod());
console.log(pig.prod());
console.log(louis.prod());
