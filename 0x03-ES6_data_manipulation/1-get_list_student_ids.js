export default function getListStudentsIds(studentArray) {
  const studentId = studentArray.map(({ id }) => id);
  return studentId;
}
