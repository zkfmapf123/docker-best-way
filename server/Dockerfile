FROM node:14

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

ENV PORT=3000

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]