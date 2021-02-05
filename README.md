project-based on "create react app"

Available scripts:

In the project directory, you can run:

- development:

- - npm start : run the app on development mode [http://localhost:3000]
- - npm test : run all tests with watch mode.
- - CI=true npm test --coverage --watch :  run all tests with coverage and watch mode.
- - npm run build : create static build files.
- - node server.js : Providing static files in Express () [http://localhost:3010]

- production:

- - docker command:

- - - docker-compose -f "Docker-compose.yml" up -d --build

- - - open port: [http://localhost:1337]
