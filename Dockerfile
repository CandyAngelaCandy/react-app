FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
ADD ./build /usr/share/nginx/html

RUN /bin/bash -c 'echo init ok!!!'
