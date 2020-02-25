FROM node:alpine as build

WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]