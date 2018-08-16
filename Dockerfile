FROM node:10.9.0
WORKDIR /usr/app
COPY package.json .
COPY package-lock.json .
RUN npm install --quiet
COPY . .