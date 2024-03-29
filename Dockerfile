# build environment
FROM node:14.17.3-alpine as build
WORKDIR /app
COPY . ./
RUN cp .env.prod .env
RUN npm ci --slient
ENV PATH /app/node_modules/.bin:$PATH
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]