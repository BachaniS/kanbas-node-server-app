import Database from "../Database/index.js";
import model from "./model.js";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}
export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(enrollment => enrollment.user !== userId || enrollment.course !== courseId);
}
export async function findCoursesForEnrolledUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter(enrollment => enrollment.user === userId);
}

export function findAllEnrollments() {
return model.find();
}

export function findUsersForEnrolledCourse(courseId) {
  const { enrollments } = Database;
  return enrollments.filter(enrollment => enrollment.course === courseId);
}
