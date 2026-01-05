FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

# -------- Runtime Stage ---------------------
FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app
COPY --from=build /app /app
EXPOSE 5000
CMD [ "server.js" ]

