import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseModel",
      required: true,
    },
    type: {
      type: String,
      enum: ["graded", "practice", "survey"],
      required: true,
    },
    points: { type: Number, required: true },
    time_limit: { type: Number, required: true },
    shuffle_answers: { type: Boolean, default: false },
    multiple_attempts: { type: Boolean, default: false },
    attempt_limit: { type: Number, default: null },
    access_code: { type: String, default: null },
    available_from: { type: Date, required: true },
    available_until: { type: Date, required: true },
    published: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  { collection: "quizzes" }
);
export default schema;
