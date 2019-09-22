| Statements | Branches | Functions | Lines |
| -----------|----------|-----------|-------|
| ![Statements](https://img.shields.io/badge/Coverage-82.69%25-yellow.svg "Make me better!") | ![Branches](https://img.shields.io/badge/Coverage-67.61%25-red.svg "Make me better!") | ![Functions](https://img.shields.io/badge/Coverage-84.06%25-yellow.svg "Make me better!") | ![Lines](https://img.shields.io/badge/Coverage-86.32%25-yellow.svg "Make me better!") |

#Skeleton API

Production ready Rest API using Node.js with Typescript

```$xslt
$ npm run start
```

###API Documentation

You can open swagger-based API Documentation on [`http://<your host>:<port>/api-docs`](http://localhost:3000/api-docs).

###Project structure

```$xslt
/ <root>
- coverage/
    - <some coverage file results>
- dist/ <production ready script>
    - config/
    - middleware/
    - services/
    - utils/
    - router.js
    - server.js
- src/ <development source code>
    - config/
    - middleware/
    - services/
    - utils/
    - router.ts
    - server.ts
- .env
- .gitignore
- package.json
- package-lock.json
- pm2.yaml
- README.md
- tsconfig.json
```

###Technology stacks

- Typescript with a strict mode
- Express, latest version with async/await supports
- Jest & Supertest make sure your code was right
- PM2 to manage (process) cluster of your node application
- Swagger-UI make easy to read API Documentation

###Thanks to 
[Alex Permyakov](https://itnext.io/@alex.permyakov) for his [blog](https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407)
