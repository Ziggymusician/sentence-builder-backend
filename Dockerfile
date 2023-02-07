FROM node:19.6.0

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
COPY ./package*.json ./

RUN npm install
# For production build
# RUN npm ci --only=production

# Bundle app source
COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "dev"]
