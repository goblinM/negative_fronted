FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/ /usr/share/nginx/html
