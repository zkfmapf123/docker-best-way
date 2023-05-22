FROM ubuntu:latest

WORKDIR /usr/src/app

RUN apt-get update -y
RUN apt-get install -y python3-pip python3-dev
RUN apt-get clean
RUN pip install flask

COPY app.py /usr/src/app/app.py

ENTRYPOINT FLAST_APP=/usr/src/app/app.py flask run