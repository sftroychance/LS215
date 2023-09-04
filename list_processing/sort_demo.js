let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

studentGrades.sort((student1, student2) => {
  console.log(student1, student2);
  if (student1.grade < student2.grade) {
    return 1; // note that returning 1 here means we are sorting descending order
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
});

console.log(studentGrades);
