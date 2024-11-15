# Step 1: Use an official Node runtime as a parent image
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY build /usr/share/nginx/html

EXPOSE 3002

CMD ["nginx", "-g", "daemon off;"]
