FROM node:16-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
# RUN npx sequelize-cli db:create
# RUN npx sequelize-cli db:migrate
EXPOSE 3000
CMD [ "npm", "run", "dev" ]