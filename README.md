# List App

In this project I built a simple List App using ReactJS and Ruby on Rails API

## Built With

- Ruby v2.6.5
- Ruby on Rails v6.0.3.2
- RSpec

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Ruby: 2.6.5
Rails: 6.0.3.2
Postgres: >=9.5

### Setup

~~~bash
$ git clone https://github.com/acushlakoncept/list-app.git
$ cd list-app
~~~

Install gems with:

```
bundle install
```
Navigate to client app

```
cd client
yarn or npm install
```

Setup database with:

> make sure you have postgress sql installed and running on your system

```
   rails db:create
   rails db:migrate
   rails db:seed   # install sample list data
```

### Usage

Start server with:

```
    rake start
```

### Deployment instructions

```
    heroku apps:create
    heroku rename app-new-name
    heroku buildpacks:add heroku/nodejs --index 1
    heroku buildpacks:add heroku/ruby --index 2
    git push heroku main
```
