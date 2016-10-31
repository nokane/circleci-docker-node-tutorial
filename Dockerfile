FROM node:6.4.0

RUN apt-get update -y
RUN apt-get install git

ADD . /src

WORKDIR /src

RUN npm install
RUN mkdir -p ./dist
RUN npm run build

CMD [ "npm", "run", "start" ]