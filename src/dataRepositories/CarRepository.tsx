import carsData from '../../public/data/cars.json';

class Car {
    Id: string;
    Name: string;
    Image: string;
    Brand: string;
    DisplayName: string;
    TopSpeed: number;
    Length: number;
    Width: number;
    Height: number;
    Weight: number;
    Horsepower: number;
    ZeroTo100: number;
    Torque: number;

    constructor(
        id: string,
        name: string,
        image: string,
        brand: string,
        displayName: string,
        topSpeed: number,
        length: number,
        width: number,
        height: number,
        weight: number,
        horsepower: number,
        zeroTo100: number,
        torque: number
    ) {
        this.Id = id;
        this.Name = name;
        this.Image = image;
        this.Brand = brand;
        this.DisplayName = displayName;
        this.TopSpeed = topSpeed;
        this.Length = length;
        this.Width = width;
        this.Height = height;
        this.Weight = weight;
        this.Horsepower = horsepower;
        this.ZeroTo100 = zeroTo100;
        this.Torque = torque;
    }
}

export const getCars = (): Array<Car> => {
    return carsData.map(
        (car: any) =>
            new Car(
                car.id,
                car.name,
                car.image,
                car.brand,
                car.displayName,
                car.topSpeed,
                car.length,
                car.width,
                car.height,
                car.weight,
                car.horsepower,
                car.zeroTo100,
                car.torque
            )
    );
}