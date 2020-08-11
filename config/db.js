if (process.env.NODE_ENV == "production") {
    module.exports = { mongoURI: "mongodb+srv://vinix:vini1990@cluster0-q10gu.mongodb.net/test" }
}
else {
    module.exports = { mongoURI: "mongodb://localhost/noticias" }
}