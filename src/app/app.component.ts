import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './services/car.service';
import { CommonModule } from '@angular/common';
import { DriverService } from './services/driver.service';
import { TravelService } from './services/travel.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    HttpClientModule
  ],
  providers: [CarService,DriverService,TravelService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Road_Data';
  private router = inject(Router);
}