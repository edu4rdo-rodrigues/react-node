FROM node:alpine 

WORKDIR /react-node/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]