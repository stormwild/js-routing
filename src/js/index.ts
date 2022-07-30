import Router from "./router";
import routes from "./routes";
import initMenu from "./menu";

initMenu();
const router = new Router(routes);

export default router;
