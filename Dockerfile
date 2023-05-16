FROM node:16
WORKDIR /usr/src/app/graphqlApp
RUN npm init -y
RUN npm install dotenv
RUN npm install mongoose
RUN npm install express-graphql
RUN npm install express
RUN npm install graphql
COPY /src /usr/src/app/graphqlApp
EXPOSE 4000
CMD ["node", "/usr/src/app/graphqlApp/server.js"]