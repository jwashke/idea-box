# Commissionrableio

[Heroku](http://ideas-box.herokuapp.com/)

## Description

![screenshot](https://s3-us-west-2.amazonaws.com/project-screenshots/idea-box.jpg)

An place to store your Ideas! Users can create, edit, and delete ideas, search for ideas by title, description, or tags. And sort ideas by quality. All features are accessed from a single view using AJAX.

## Setup

#### Run the project locally

clone down the project
```
git clone git@github.com:jwashke/idea-box.git
```

cd into the project directory
```
cd idea-box
```

Setup the database
```
rake db:create db:migrate db:seed
```

Start the server by running
```
rails s
```
Visit the site in your browser by going to
```
localhost:3000
```


#### Run the tests

cd into the main project directory
```
cd idea-box
```

run rspec

```
rspec
```
