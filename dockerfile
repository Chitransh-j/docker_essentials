FROM node:latest
RUN npm i -g nodemon

#->change destination directory
WORKDIR /app  
COPY . .
RUN npm i
EXPOSE 3000
CMD ["npm","run","dev"]
 