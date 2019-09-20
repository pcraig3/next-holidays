![](https://github.com/cds-snc/next-holidays/workflows/Test,%20build,%20deploy/badge.svg)

# Next Holidays

This is a small frontend that reads from the [holidays-canada](https://github.com/cds-snc/holidays-canada) API. It shows you your next provincial or federal holiday, and doesn't do much else.

## Getting started

### [Install `npm`](https://www.npmjs.com/get-npm)

`npm` is a javascript package manager. It downloads project dependencies and runs node applications.

### [Install `docker`](https://docs.docker.com/install/)

A docker container allows a developer to package up an application and all of its parts. This means we can build an app in any language, in any stack, and then run it anywhere — whether locally or on a server.

## Build and run with npm

```bash
# install dependencies
npm install

# run application in 'dev' mode
npm run dev

# run application in 'prod' mode
npm run build && npm start
```

On a Mac, press `Control` + `C` to quit the running application.

### Run code linting

```bash
# run code linter
npm run lint
```

## Build and run as a Docker container

```bash
# build an image locally
docker build -t pcraig3/next-holidays .

# run the container
docker run -it -p 80:80 pcraig3/next-holidays
```

On a Mac, press `Control` + `C` to quit the running docker container.

### Overriding the default port number or API URL

[The Dockerfile](https://github.com/cds-snc/next-holidays/blob/master/Dockerfile) sets default values for `PORT` (`80`) and `API_URL` (`https://holidays-canada.azurewebsites.net`).

To override either or both of these environment variables at runtime, pass in the new variable after the `-e` flag when booting up the container.

```bash
# override the port number and the API_URL
docker run -it -e PORT=3000 -e API_URL=https://example.com -p 80:3000 pcraig3/next-holidays
```
