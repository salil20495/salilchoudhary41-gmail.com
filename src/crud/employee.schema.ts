import * as mongoose from 'mongoose';

export const JobSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  technology: { type: String, required: true },
  salary: { type: Number, required: true },
});
