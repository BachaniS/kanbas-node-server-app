import model from "./model.js";

export function enrollUserInCourse(userId, courseId) {
  return model.create({ user: userId, course: courseId });
}
export function unenrollUserInCourse(userId, courseId) {
  return model.deleteOne({ user: userId, course: courseId });
}
export async function findCoursesForEnrolledUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}

export function findAllEnrollments() {
  return model.find();
}

export async function findUsersForEnrolledCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
