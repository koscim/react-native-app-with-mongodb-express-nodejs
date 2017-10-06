import mongoose, { Schema } from 'mongoose';

// Define movie schema
let movieSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  poster: String,
  genre: String,
  days: Array,
  times: Array
});

// Export Mongoose model
export default mongoose.model('movie', movieSchema);
