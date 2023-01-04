export default function getStudentIdsSum(studentArray) {
  const studentId = studentArray.map(({ id }) => id);
  const sumOfIds = studentId.reduce((sum, a) => sum + a, 0);
  return sumOfIds;
}
