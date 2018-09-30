FROM node:8.12.0-alpine as development
COPY ./package.json /api/package.json
WORKDIR /api
RUN apk add --no-cache curl && \
    yarn
CMD yarn start:dev
