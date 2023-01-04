export default function getStudentsByLocation(studentArray, city) {
  const studentLocation = studentArray.filter((find) => find.location === city);
  return studentLocation;
}
