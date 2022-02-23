import registerRootComponent from "expo/build/launch/registerRootComponent";
import App from "./src/App";
import { register } from "./src/serviceWorkerRegistration";

registerRootComponent(App);

register();
