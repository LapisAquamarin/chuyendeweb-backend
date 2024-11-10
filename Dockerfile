FROM ubuntu:latest
LABEL authors="Minh Nguyen"

ENTRYPOINT ["top", "-b"]