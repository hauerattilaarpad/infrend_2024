import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { CarDTO } from "../../../models";
import { Travel } from "./Travel";

@Entity()
export class Car implements CarDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    licensePlate: string;

    @Column()
    type: string;

    @Column()
    fuelType: string;

    @Column()
    fuelConsuption: string;

    @Column()
    startingKm: string;

    @OneToMany(() => Travel, (travel) => travel.car)
    travels: Travel[];
}