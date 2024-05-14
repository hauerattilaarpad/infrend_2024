
import { AppDataSource } from "../data-source";
import { Driver} from "../entity/Driver";
import { Controller } from "./base.controller";

export { Controller } from "./base.controller";
export class DriverController extends Controller {
    repository = AppDataSource.getRepository(Driver);
}