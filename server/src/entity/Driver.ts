import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { DriverDTO } from "../../../models";
import { Travel } from "./Travel";

@Entity()
export class Driver implements DriverDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    driversLicenseId: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    licenseExpireDate: string;

    @Column()
    dateOfBirth: string;

    @OneToMany(() => Travel, (travel) => travel.driver)
    travels: Travel[];
}