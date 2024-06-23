FROM node 

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 9090

CMD {"node","src/app.js"}
