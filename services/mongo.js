import mongoose from "mongoose";
export const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_CONNECTION_URL)
        console.log('Conected')
        return connect
    } catch (error) {
        console.log(error)
    }
}