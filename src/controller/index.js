const usersController = require("./usersController");
const moviesController = require("./moviesController");
const reviewsController = require("./reviewsController");
const genresController = require("./genresController");

class Controller {
  users() {
    return usersController;
  }
  movies() {
    return moviesController;
  }
  reviews() {
    return reviewsController;
  }
  genres() {
    return genresController;
  }
}

module.exports = new Controller();
