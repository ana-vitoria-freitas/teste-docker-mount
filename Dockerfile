FROM node:12.18.1
ENTRYPOINT [ "node", "src/server.js" ]
RUN apt-get update && apt-get install -y curl && apt-get install -y jq

WORKDIR /app
 
COPY package.json /app
RUN npm install
COPY package-lock.json /app
 
 
COPY . .
 

