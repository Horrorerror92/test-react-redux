project-based on "create react app"

Available scripts:

In the project directory, you can run:

- development:

- - npm start : run the app on development mode [http://localhost:3000]
- - npm test : run all tests with watch mode.
- - CI=true npm test --coverage --watch :  run all tests with coverage and watch mode.

- - docker command:
- - - Docker-compose.yml" up -d --build
- - - open port: http://localhost:3001/

- production:

- - docker command:

- - - docker-compose -f "Docker-compose.prod.yml" up -d --build

- - - open port: http://localhost:1337/
