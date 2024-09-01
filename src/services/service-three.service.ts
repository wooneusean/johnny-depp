import { Service } from "../../lib/JohnnyDepp";
import ServiceOne from "./service-one.service.ts";
import ServiceTwo from "./service-two.service.ts";

@Service
export default class ServiceThree {
  constructor(
    private serviceOne: ServiceOne,
    private serviceTwo: ServiceTwo,
  ) {}

  public test(){
    this.serviceOne.log("Hello from service three.")
    this.serviceTwo.hello();
  }
}
