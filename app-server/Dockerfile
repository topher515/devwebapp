FROM ubuntu:14.04

MAINTAINER Chris Wilcox <ckwilcox@gmail.com>

WORKDIR /opt/scootme/

RUN apt-get update
RUN apt-get install -y libxslt-dev libxml2-dev
RUN apt-get -y install python python-dev python-pip build-essential git
# RUN apt-get -y install curl

ADD requirements.txt app-server/requirements.txt

# Web app
RUN pip install -r app-server/requirements.txt

WORKDIR /opt/scootme/app-server/scootme/

CMD python serve.py