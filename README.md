# List App

In this project I built a simple List App using ReactJS and Ruby on Rails API

## Built With

- Ruby v2.6.5
- Ruby on Rails v6.0.3.2
- RSpec

## Live Demo
[Live Demo](https://list-rails-react-app.herokuapp.com/)

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
Test the production build locally with our Rake task

```
    rake start:production
```
Your app should be running at `http://127.0.0.1:5000/`

Make sure you have committed all changes
```
    git add .
    git commit -m "ready for first push to heroku"
    git push heroku master
    heroku run rake db:migrate
    heroku run rake db:seed
```
Fire up your app by running `heroku open` Yay!!! your app has been deployed successfully.

# Authors

👤 **Uduak Essien**

- Github: [@acushlakoncept](https://github.com/acushlakoncept/)
- Twitter: [@acushlakoncept](https://twitter.com/acushlakoncept)
- Linkedin: [acushlakoncept](https://www.linkedin.com/in/acushlakoncept/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
- [Bruno Boehm's Article](https://medium.com/@bruno_boehm/reactjs-ruby-on-rails-api-heroku-app-2645c93f0814) on ReactJS + Ruby on Rails API + Heroku App

