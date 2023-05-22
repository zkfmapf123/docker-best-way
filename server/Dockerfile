FROM ubuntu:latest

RUN apt-get update && \ 
    apt-get -y install python3 python3-pip && \
    pip3 install flask flask-mysql

COPY . /opt/source-code

ENTRYPOINT FLASK_APP=/opt/source-code/app.py flask run


### docker build . -f Dockerfile -t custom-app