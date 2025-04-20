import carsData from '../../public/data/cars.json';

class Car {
    id: string;
    name: string;
    image: string;
    brand: string;
    displayName: string;

    constructor(
        id: string,
        name: string,
        image: string,
        brand: string,
        displayName: string
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.brand = brand;
        this.displayName = displayName;
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
                car.displayName
            )
    );
}