# Init Express + JavaScript

`npm init -y`

> change package.json
>
>`"main": "src/index.js",`

```
[install express and dotenv]

npm i express dotenv
```

> create .env with content

```
PORT=3000
```

> create index.js with content

```
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

> Run command

`node src/index.js`

[continue with Typescript](./README_ts.md)