FROM node:alpine
WORKDIR /app
COPY . .
CMD yarn && yarn start