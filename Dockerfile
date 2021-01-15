FROM node:14
ENV MYSQL_URL 172.17.0.1
ENV MYSQL_USERNAME admin
ENV MYSQL_PASSWORD admin
ENV MYSQL_DATABASE neuss
ENV MYSQL_PORT 3308
ENV PORT 3050
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3050
CMD ["npm", "start"]
