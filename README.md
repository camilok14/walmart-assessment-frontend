# walmart-assessment-frontend

## Run app
```bash
# Deployed on heroku
visit https://walmart-assessment-frontend.herokuapp.com/

# Using docker compose to run frontend and backend
$ sudo docker-compose up

# From docker container, against backend deployed on Heroku
$ sudo docker run -it -p 80:80 camilok14/walmart-assessment-frontend

# From docker container, against backend running on docker container listening on port 3000 (used in docker-compose)
$ sudo docker run -it -p 80:80 camilok14/walmart-assessment-frontend:local
```

## Project setup
```
npm install
```

### Configure backend endpoint
```
echo "VUE_APP_BACKEND_URL='https://walmart-assessment-backend.herokuapp.com/'" > .env
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Get unit tests coverage
```
npm run test:cov
```

### Run your end-to-end tests
```bash
# With cypress UI
npm run test:e2e

# Console only
npm run test:e2e -- --headless
```