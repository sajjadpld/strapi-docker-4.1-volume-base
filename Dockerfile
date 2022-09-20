FROM node:16.15-alpine3.14
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY ./script.sh /
RUN chmod +x /script.sh
EXPOSE 1332
ENTRYPOINT ["/script.sh"]