FROM node:16.13.0
ENV PORT=80
ENV NODE_ENV=production
ENV MONGO_URI=mongodb://mtg-mongodb:27017/data
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .

CMD [ "node", "index.js" ]
