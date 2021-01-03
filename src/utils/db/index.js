import mongoose from 'mongoose'

const connection = {}

async function connectDb() {
    if (connection.isConnected) {
        return
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState
}

export default connectDb
