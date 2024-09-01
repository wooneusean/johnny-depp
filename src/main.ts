import "reflect-metadata";
import JohnnyDepp from "../lib/JohnnyDepp";
import { ServiceOneController } from "./controllers/service-one.controller.ts";

JohnnyDepp.get(ServiceOneController).index();
