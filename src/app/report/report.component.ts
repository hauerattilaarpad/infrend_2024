import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CarDTO, TravelDTO, TravelType } from '../../../models';
import { CarService } from '../services/car.service';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit{
  formBuilder = inject(FormBuilder);
  carService = inject(CarService);
  travelService = inject(TravelService);

  cars: CarDTO[] = [];
  selectedCar: CarDTO = {} as CarDTO;
  travels: TravelDTO[] = [];
  travelWork: TravelDTO[] = [];
  travelPrivate: TravelDTO[] = [];

  selectedDate = '2024-05';
  fuelprice = 480;
  kmprice = 10;
  selectedfuelConsuption = '0';
  privateTravel = 0;
  privateFuel = 0;
  privatePrice = 0;
  privateFullPrice = 0;
  workTravel = 0;
  workFuel = 0;
  workPrice = 0;
  workFullPrice = 0;
  maxNewKm = 0;
  minNewKm = 0;

  reportForm = this.formBuilder.group({
    date: '',
    car: this.formBuilder.control({})
  });

  ngOnInit(): void {
    this.carService.getAll().subscribe((cars: CarDTO[]) => this.cars = cars);
    this.travelService.getAll().subscribe((travels: TravelDTO[]) => this.travels = travels);
  }

  selectquery() {
    const carId = this.reportForm.value.car;
    const selectedDate = this.reportForm.value.date;

    console.log(carId)
    console.log(selectedDate)
    const foundCar = this.cars.find(car => car.id === carId);
    if (foundCar) {
      this.selectedCar = foundCar;
    } else {
      return;
    }

    var travels = this.travels.filter(travel => {
      return travel.car?.id === this.selectedCar.id;
    });
    
    const [selectedYear, selectedMonth] = selectedDate!.split('-');
    travels = travels.filter(travel => {
      const [travelYear, travelMonth] = travel.date.split('-');
      return travelYear === selectedYear && travelMonth === selectedMonth;
    });

    if (travels.length == 0) {
      this.travelWork = [];
      this.travelPrivate = [];
      this.selectedfuelConsuption = '0';
      this.privateTravel = 0;
      this.privateFuel = 0;
      this.privatePrice = 0;
      this.privateFullPrice = 0;
      this.workTravel = 0;
      this.workFuel = 0;
      this.workPrice = 0;
      this.workFullPrice = 0;
      this.maxNewKm = 0;
      this.minNewKm = 0;
      return;
    }

    const maxNewKmTravel = travels.reduce((maxTravel, currentTravel) => {
      return currentTravel.newKm > maxTravel.newKm ? currentTravel : maxTravel;
    }, travels[0]);
    this.maxNewKm = maxNewKmTravel ? maxNewKmTravel.newKm : 0;

    const minNewKmTravel = travels.reduce((minTravel, currentTravel) => {
      return currentTravel.newKm < minTravel.newKm ? currentTravel : minTravel;
    }, travels[0]);
    this.minNewKm = minNewKmTravel.newKm - minNewKmTravel.traveledDistance;

    this.travelWork = travels.filter(travel => {
      return travel.type === TravelType.Work;
    });

    this.travelPrivate = travels.filter(travel => {
      return travel.type === TravelType.Private;
    });

    this.privateTravel = this.travelPrivate.reduce((totalDistance, travel) => {
      return totalDistance + travel.traveledDistance;
    }, 0);

    this.workTravel = this.travelWork.reduce((totalDistance, travel) => {
      return totalDistance + travel.traveledDistance;
    }, 0);

    if (this.selectedCar)
      this.selectedfuelConsuption = this.selectedCar.fuelConsuption;

    this.privatePrice = this.privateTravel * this.kmprice;
    this.workPrice = this.workTravel * this.kmprice;

    this.privateFuel = this.privateTravel / 100 * Number(this.selectedfuelConsuption) * this.fuelprice;
    this.workFuel = this.workTravel / 100 * Number(this.selectedfuelConsuption) * this.fuelprice;

    this.privateFullPrice = this.privateFuel + this.privatePrice;
    this.workFullPrice = this.workFuel + this.workPrice;
  }
}
