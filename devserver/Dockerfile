FROM debian:wheezy

MAINTAINER Chris Wilcox <ckwilcox@gmail.com>

WORKDIR /opt/app

RUN apt-get update
RUN apt-get install -y libxslt-dev libxml2-dev
RUN apt-get -y install python python-dev python-pip build-essential git
# RUN apt-get -y install curl

# Web app
RUN pip install Flask sqlalchemy


VOLUME ["/opt/app"]

EXPOSE 8000 8080