import carsData from '../../public/data/cars.json';

class Car {
    Id: string;
    Name: string;
    Image: string;
    Brand: string;
    DisplayName: string;
    TopSpeed: number;

    constructor(
        id: string,
        name: string,
        image: string,
        brand: string,
        displayName: string,
        topSpeed: number
    ) {
        this.Id = id;
        this.Name = name;
        this.Image = image;
        this.Brand = brand;
        this.DisplayName = displayName;
        this.TopSpeed = topSpeed;
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
                car.topSpeed
            )
    );
}