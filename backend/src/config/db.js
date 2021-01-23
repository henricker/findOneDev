module.exports = {
    mongoUri: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.qwe3q.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
}