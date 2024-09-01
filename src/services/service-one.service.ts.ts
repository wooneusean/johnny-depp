import { Service } from "../../lib/JohnnyDepp";

@Service
export class ServiceOne {
  // Can't do this for some reason, I know its a cyclic dependency but
  // browsers are throwing:
  //  `Uncaught ReferenceError: can't access lexical declaration 'ServiceTwo' before initialization`
  //
  // constructor(private serviceTwo: ServiceTwo) {}

  public log(msg: string) {
    console.log(msg);
  }
}
