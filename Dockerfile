FROM node:19 as prod
ENV NODE_ENV=production

WORKDIR /app
EXPOSE 4200

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "npm", "run", "start" ]


FROM node:19 as dev

WORKDIR /appdev
EXPOSE 4200

CMD [ "npm", "run", "dev" ]