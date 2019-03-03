FROM alpine:3.9

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY *.json ./

# Install nodejs
RUN apk add --update nodejs nodejs-npm

RUN npm install
# # If you are building your code for production
# # RUN npm install --only=production

COPY src/ ./src
COPY dist/ ./dist
COPY e2e/ ./e2e

EXPOSE 4200

CMD  ["npm", "start"]
