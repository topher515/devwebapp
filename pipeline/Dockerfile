FROM ubuntu:14.04

MAINTAINER Chris Wilcox <ckwilcox@gmail.com>

WORKDIR /opt/

# Build
RUN apt-get update

RUN apt-get -y install git
# Install Node/NPM
RUN apt-get -y install curl 
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get -y install nodejs 
# RUN apt-get -y install build-essential

RUN npm install -g npm

ADD package.json /opt/package.json

RUN npm install

ADD gulpfile.js /opt/gulpfile.js
ADD bower.json /opt/bower.json
ADD .bowerrc /opt/.bowerrc

RUN mkdir /opt/bower_components

# Install gulp
# RUN npm install -g gulp 
# # http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally
# RUN npm install gulp 
# RUN npm install gulp-less 
# RUN npm install gulp-concat
# RUN npm install gulp-coffee
# # RUN npm install gulp-imagemin
# RUN npm install del

# # Install Bower
# RUN npm install -g bower

# # Install yeoman
# RUN npm install -g yo

# ADD gulpfile.js /opt/gulpfile.js
# ADD bower.json /opt/bower.json
# ADD .bowerrc /opt/.bowerrc

VOLUME ["/opt/src"]

EXPOSE 9000