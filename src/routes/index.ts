import { readdirSync } from "fs";
import { Router } from "express";

const router: Router = Router();
const PATH_ROUTES: string = __dirname;

const removeExtension = (filename: string) => {
  return filename.split(".").shift();
}

readdirSync(PATH_ROUTES).filter((file) => {
  const filename = removeExtension(file);
  if (filename !== "index") {
    import(`./${filename}`)
      .then((moduleRouter) => {
        console.log(`Cargando ruta ${filename}`);
        router.use(`/${filename}`, moduleRouter.router);
      });
  }
});

export default router;
