import { Service } from "../../lib/JohnnyDepp";
import ServiceTwo from "../services/service-two.service.ts.ts";

@Service
export class ServiceOneController {
  constructor(private serviceTwo: ServiceTwo) {}

  index() {
    this.serviceTwo.hello();
  }
}
