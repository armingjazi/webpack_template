# base image
FROM node:11.10

ARG port=3000

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV HOST="0.0.0.0"
ENV PORT=$port

COPY build_production.sh /app/
COPY config_base.js /app/config_base.js
COPY webpack.production.config.js /app/webpack.production.config.js
COPY package.json yarn.lock /app/
COPY server.js /app/
ADD src /app/src
RUN yarn install --pure-lockfile

EXPOSE $port
RUN yarn build

CMD ["yarn", "start"]