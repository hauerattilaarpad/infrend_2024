import express from 'express';

import { CarController } from './controller/carcontroller';
import { DriverController } from './controller/drivercontroller';
import { TravelController } from './controller/travelcontroller';

export function getRouter() {
    const router = express.Router();

    

    const carcontroller = new CarController();
    
    router.get('/car', carcontroller.getAll);
    router.get('/car/:id', carcontroller.getOne);
    router.post('/car',  carcontroller.create);
    router.put('/car', carcontroller.update);
    router.delete('/car/:id', carcontroller.delete);

    const driverController = new DriverController();

    router.get('/driver', driverController.getAll);
    router.get('/driver/:id', driverController.getOne);
    router.post('/driver',  driverController.create);
    router.put('/driver',  driverController.update);
    router.delete('/driver/:id', driverController.delete);

    const travelcontroller = new TravelController();

    router.get('/travel', travelcontroller.getAll);
    router.get('/travel/:id', travelcontroller.getOne);
    router.post('/travel', travelcontroller.create);
    router.put('/travel', travelcontroller.update);
    router.delete('/travel/:id', travelcontroller.delete);

    return router;
}