FROM node:22.12.0 as node-stage

LABEL authors="marouaneabk"

ARG APP_NAME
RUN npm install -g pnpm
WORKDIR /builds
COPY . .

RUN pnpm install
RUN pnpm run build

FROM nginx:1.27.3-perl as nginx-stage
COPY --from=node-stage /builds/dist /usr/share/nginx/html
EXPOSE 8080
RUN echo "server { listen 8080; root /usr/share/nginx/html; index index.html; }" > /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]