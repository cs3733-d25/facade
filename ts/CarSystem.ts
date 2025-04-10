class Car {
  car: string;

  constructor(myCar: string) {
    this.car = myCar;
  }

  public getCar(): string {
    return this.car;
  }

  public drive(): void {
    // console.log(this.car + " is moving!");
    document.writeln(`${this.car} is moving!<br />`);
  }

  public stop(): void {
    document.writeln(`${this.car} is stopping!<br />`);
  }

  public turn(dir: string): void {
    document.writeln(`${this.car} is making a ${dir} turn.<br />`);
  }

}

class CarStereo {
  station: string;
  constructor(myStation: string) {
    this.station = myStation;
  }

  public getStation(): string {
    return this.station;
  }

  public radio(): void {
    document.writeln(`Listening to station: ${this.station}<br \>`);
  }

  public MP3(): void {
    document.writeln("Playing an MP3<br \>");
  }
}

class CarSystem {
  car: Car;
  carStereo: CarStereo;

  constructor(carName: string, radioStation: string) {
    this.car = new Car(carName);
    this.carStereo = new CarStereo(radioStation);
  }

  public drive(): void { this.car.drive(); }
  public stop(): void { this.car.stop(); }
  public turn(dir: string): void { this.car.turn(dir); }
  public radio(): void { this.carStereo.radio(); }
  public MP3(): void { this.carStereo.MP3(); }
}
