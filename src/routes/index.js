const router = require("express").Router();

const users = require("./usersRouter");
const genres = require("./genresRouter");
const movies = require("./moviesRouter");
const reviews = require("./reviewsRouter");

router.use("/users", users);
router.use("/genres", genres);
router.use("/movies", movies);
router.use("/reviews", reviews);

module.exports = router;
