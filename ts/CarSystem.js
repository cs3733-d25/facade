var Car = /** @class */ (function () {
    function Car(myCar) {
        this.car = myCar;
    }
    Car.prototype.getCar = function () {
        return this.car;
    };
    Car.prototype.drive = function () {
        // console.log(this.car + " is moving!");
        document.writeln("".concat(this.car, " is moving!<br />"));
    };
    Car.prototype.stop = function () {
        document.writeln("".concat(this.car, " is stopping!<br />"));
    };
    Car.prototype.turn = function (dir) {
        document.writeln("".concat(this.car, " is making a ").concat(dir, " turn.<br />"));
    };
    return Car;
}());
var CarStereo = /** @class */ (function () {
    function CarStereo(myStation) {
        this.station = myStation;
    }
    CarStereo.prototype.getStation = function () {
        return this.station;
    };
    CarStereo.prototype.radio = function () {
        document.writeln("Listening to station: ".concat(this.station, "<br >"));
    };
    CarStereo.prototype.MP3 = function () {
        document.writeln("Playing an MP3<br \>");
    };
    return CarStereo;
}());
var CarSystem = /** @class */ (function () {
    function CarSystem(carName, radioStation) {
        this.car = new Car(carName);
        this.carStereo = new CarStereo(radioStation);
    }
    CarSystem.prototype.drive = function () { this.car.drive(); };
    CarSystem.prototype.stop = function () { this.car.stop(); };
    CarSystem.prototype.turn = function (dir) { this.car.turn(dir); };
    CarSystem.prototype.radio = function () { this.carStereo.radio(); };
    CarSystem.prototype.MP3 = function () { this.carStereo.MP3(); };
    return CarSystem;
}());
