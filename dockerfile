FROM node:20-bullseye

# Install Chromium
RUN apt-get update && apt-get install -y \
    chromium \
    && rm -rf /var/lib/apt/lists/*

# Tell puppeteer where chromium is
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build frontend
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
