const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect DB Thành Công !');
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = { connectDB }