FROM node:20.11-buster

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8010

CMD [ "node", "index.js" ]