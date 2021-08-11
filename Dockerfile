FROM node:14 as build

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run compile
RUN rm -rf src

FROM gcr.io/distroless/nodejs:14
COPY --from=build /app /app
WORKDIR /app
CMD ["dist/index.js"]
