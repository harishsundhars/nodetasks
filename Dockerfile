FROM node:20.2-alpine
COPY . /task
WORKDIR /task
RUN npm install
RUN npm i -g ts-node
CMD npm run prod