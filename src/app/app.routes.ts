import { Routes } from '@angular/router';

import { CarListComponent } from './car-list/car-list.component';

import { CarformComponent } from './carform/carform.component';

import { inject } from '@angular/core';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverformComponent } from './driverform/driverform.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelformComponent } from './travelform/travelform.component';
import { ReportComponent } from './report/report.component';


export const routes: Routes = [

    {
        path: 'cars',
        component: CarListComponent
    },
    {
        path: 'add-car',
        component: CarformComponent
    },
    {
        path: 'edit-car/:id',
        component: CarformComponent
    }, {
        path: 'drivers',
        component: DriverListComponent
    },
    {
        path: 'add-driver',
        component: DriverformComponent
    },
    {
        path: 'edit-driver/:id',
        component: DriverformComponent
    },
    {
        path: 'travels',
        component: TravelListComponent
    },
    {
        path: 'add-travel',
        component: TravelformComponent
    },
    {
        path: 'edit-travel/:id',
        component: TravelformComponent
    },
    {
        path: 'monthly-query',
        component: ReportComponent
    }

];