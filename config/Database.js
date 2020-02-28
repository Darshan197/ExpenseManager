const mongoose = require('mongoose')

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`MongoDB connected On ${conn.connection.host}`.green);
    } catch (error) {
        console.error(error.message); 
    }
}

module.exports = connect