export interface CarDTO {
    id: number;
    licensePlate: string;
    type: string;
    fuelType: string;
    fuelConsuption: string;
    startingKm: string;
}


export interface DriverDTO {
    id: number;
    driversLicenseId: string;
    name: string;
    address: string;
    licenseExpireDate: string;
    dateOfBirth: string;
}

export interface TravelDTO {
    id: number;
    driver: null | DriverDTO;
    car: null | CarDTO;
    date: string;
    type: TravelType;
    startPlace: string;
    endPlace: string;
    traveledDistance: number;
    newKm: number;
}

export enum TravelType {
    Work = 'céges',
    Private = 'magán'
}