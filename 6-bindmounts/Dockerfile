FROM node:20-alpine

WORKDIR /nextapp

COPY package.json* .
RUN  npm install

COPY . .

CMD [ "npm","run","dev" ]


# docker run -p 3000:3000  -v ./app:/nextapp/app  nextapp