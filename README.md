# walmart-assessment-frontend

## Run app with docker
```
sudo docker run -it -p 80:80 camilok14/walmart-assessment-frontend
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

### Run your end-to-end tests
```
npm run test:e2e
```