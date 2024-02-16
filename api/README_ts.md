# Continue init + TypeScript

> install typescript dependencies

`npm i -D typescript @types/express @types/node`

> generate  tsconfig.json file

`npx tsc --init`

> change in tsconfig.json

```
{
  "compilerOptions": {
    ...
    "outDir": "./dist"
    ...
  }
}
```

> update package.json
>
> `main` field in the `package.json` file to dist/index.js

> renaming
>
> renaming the file from `index.js` in the src directory to `index.ts`

> update index.ts
```
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

> run typescript api
>
> `npx ts-node src/index.ts`

> install nodemon and ts-node for running server without stopping evert time
>
> `npm i -D nodemon ts-node`

> update scripts in package.json
```
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  }
}
```

> running command
>
>`npm run dev`