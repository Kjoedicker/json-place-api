# json-place-api

Proof of concept API for fetching faux album data from JSONPlaceholder.

## About

Contains one core route that pulls albums based off the numerical id provided in the url parameter.

## Installation

#### Clone

` git clone https://github.com/Kjoedicker/json-place-api.git`

#### Install

`npm install`

## Startup

In the root directory you can run `docker-compose up --build` or you can run `npm start`

Either results in a listen on port `8080`

## Usage

### Browser

`localhost:8080/albums/<id>`

### CURL

` curl -H "Accept: application/json" localhost:8080/albums/<id>`
