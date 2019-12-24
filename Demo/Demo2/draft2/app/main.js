import { ControllerMainWindow } from "./main-window/ControllerMainWindow.js";
import { ControllerDetails } from "./details/ControllerDetails.js";
import { ControllerAnimalsData } from "./animals-data/ControllerAnimalsData.js";
import { ControllerSearch } from "./search/ControllerSearch.js";
import { ControllerCart } from "./cart/ControllerCart.js";
import { Publisher } from "./share/Publisher.js";

const publisher = new Publisher();
const controllerAnimalsData = new ControllerAnimalsData(publisher.ctrls);
const controllerMainWindow = new ControllerMainWindow(publisher.ctrls);
const controllerSearch = new ControllerSearch(publisher.ctrls);
const controllerDetails = new ControllerDetails(publisher.ctrls);
const controllerCart = new ControllerCart(publisher.ctrls);