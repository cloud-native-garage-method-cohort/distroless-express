FROM node:14 as build

ADD . /app
WORKDIR /app

RUN npm install --production

FROM gcr.io/distroless/nodejs:14
COPY --from=build /app /app
WORKDIR /app
CMD ["src/index.js"]
