FROM node:14
RUN mkdir -p /usr/server
WORKDIR /usr/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3050
CMD ["npm", "start"]
