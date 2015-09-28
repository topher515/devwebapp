FROM node:4.1.1-wheezy

MAINTAINER Chris Wilcox <ckwilcox@gmail.com>

WORKDIR /opt/devwebapp/asset-pipeline/

ADD package.json ./

RUN npm install

ADD gulpfile.js ./