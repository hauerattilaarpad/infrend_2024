
import { AppDataSource } from "../data-source";
import { Car} from "../entity/Car";
import { Controller } from "./base.controller";

export { Controller } from "./base.controller";
export class CarController extends Controller {
    repository = AppDataSource.getRepository(Car);
}