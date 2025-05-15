## React + Vite + Express

This project uses React + Vite and was created from a project template from Vercel.

The backend site is built with express and hosts API for frontend to call.(Of course not running on Vercel)

## Deploy on Vercel

_Live domain: [https://vite-react-example.vercel.app](https://data-collections.vercel.app/)_

## Deploy in Docker

Build the Docker image:
```
docker build -t my-app .
```

Run the Docker Container
```
docker run -p 5173:5173 -p 3000:3000 my-app
```