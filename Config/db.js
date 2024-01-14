import mongoose from 'mongoose';
import colors from 'colors';


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected successfully")
    } catch (error) {
        // console.log(error)
        console.log("error occoured.")
    }
}

export default connectDB;
