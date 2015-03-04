FROM debian:wheezy

MAINTAINER Chris Wilcox <ckwilcox@gmail.com>

WORKDIR /opt/

# Build
RUN apt-get update

# Install Node/NPM
RUN apt-get -y install curl 
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get -y install nodejs npm

# Install gulp
RUN npm install -g gulp 
# http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally
RUN npm install gulp 
RUN npm install gulp-less 
RUN npm install gulp-concat
RUN npm install gulp-coffee
# RUN npm install gulp-imagemin
RUN npm install del

# Install Bower
RUN npm install -g bower

ADD gulpfile.js /opt/gulpfile.js
ADD bower.json /opt/bower.json
ADD .bowerrc /opt/.bowerrc

RUN apt-get -y install git

VOLUME ["/opt/app"]