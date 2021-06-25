FROM node:latest

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 8088

CMD ["npm", "run", "start"]