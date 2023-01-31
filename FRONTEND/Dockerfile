### STAGE 1: Build ###
FROM node:19 AS build
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.23.3 as prod
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html


# Dev

FROM node:19 as dev

RUN npm install -g @angular/cli

WORKDIR /appdev
EXPOSE 4200

COPY package.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY angular.json tsconfig* ./

CMD [ "npm", "run", "dev" ]
