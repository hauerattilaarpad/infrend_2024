
import { AppDataSource } from "../data-source";
import { Travel } from "../entity/Travel";
import { Controller } from "./base.controller";

export { Controller } from "./base.controller";
export class TravelController extends Controller {
    repository = AppDataSource.getRepository(Travel);
}