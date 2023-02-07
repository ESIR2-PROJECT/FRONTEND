
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
