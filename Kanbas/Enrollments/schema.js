import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        student: { type: mongoose.Schema.Types.ObjectId, ref: "StudentModel" },
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        grade: Number,
    },
    { collection: "enrollments" }
);
export default schema;