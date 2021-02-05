FROM node:12-alpine as build

WORKDIR /temp

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install --silent

RUN npm install react-scripts@4.0.1 -g --silent

COPY . ./

RUN npm run build

FROM node:12-alpine as runtime

WORKDIR /app

COPY --from=build temp/build/ /app/build/
COPY --from=build temp/node_modules/ /app/node_modules/
COPY --from=build temp/server.js /app/
COPY --from=build temp/package.json /app/
COPY --from=build temp/package-lock.json /app/

CMD ["npm", "run", "servopen"]
