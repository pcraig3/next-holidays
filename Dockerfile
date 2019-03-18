FROM node:lts-alpine
LABEL maintainer="paul.craig@cds-snc.ca"

ENV PORT=80
ENV API_URL="https://holidays-canada.azurewebsites.net"

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 80
CMD ["yarn", "start"]
