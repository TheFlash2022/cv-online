FROM node:18-alpine
WORKDIR /home/app
COPY . .
RUN npm install
CMD [ "npm","start" ]
EXPOSE 3000