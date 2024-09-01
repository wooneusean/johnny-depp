import { Service } from "../../lib/JohnnyDepp";
import ServiceOne from "./service-one.service.ts";

@Service
export default class ServiceTwo {
  constructor(private serviceOne: ServiceOne) {}

  public hello() {
    this.serviceOne.log("Hello from service two.");
  }
}
