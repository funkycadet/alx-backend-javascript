export default function getListStudentsIds(studentArray) {
  if (!Array.isArray(studentArray)) {
    return [];
  }
  const studentId = studentArray.map(({ id }) => id);
  return studentId;
}
