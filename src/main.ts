import "reflect-metadata";
import JohnnyDepp from "../lib/JohnnyDepp";
import { ServiceOneController } from "./controllers/service-one.controller.ts";
import ServiceThree from "./services/service-three.service.ts";

JohnnyDepp.get(ServiceThree).test();
