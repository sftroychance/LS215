/* eslint-disable no-tabs */
// At the end of each term, faculty members need to prepare a class record
// summary for students based on the weighted scores of exams and exercises. In
// this practice problem, we will prepare one such summary from some provided
// student records.

// Exams and Exercises
// Grading areas include exams and exercises, with the following weights:
// Grading Area	Weight
// Exam	65%
// Exercises	35%

// Each term has four exams, and several exercises. Every exam has a fixed
// maximum score of 100, while exercises have varied maximum score values and
// counts. The total maximum point value for all exercises in any term is always
// 100, regardless of how many exercises the students had to complete. For
// example, a term may have five exercises with possible score maximums of [30,
// 20, 10, 20, 20] while another term may have three exercises with possible
// score maximums of [20, 30, 50].

// To determine a student's grade, we first determine the student's average
// score from the four exams, then sum all the exercise scores. We then apply
// the weights to compute the student's final percent grade. Finally, we
// determine the letter equivalent grade from the student's percent grade we
// just computed.

// Percent Grade	Letter Equivalent
// 93 - 100	A
// 85 - 92	B
// 77 - 84	C
// 69 - 76	D
// 60 - 68	E
// 0 - 59	F

// For example, let's assume a term with three exercises with maximum scores of
// [20, 30, 50]. A student got [90, 80, 95, 71] on her four exams, and [20, 15,
// 40] on her exercises. To determine her final grade, we follow these steps:

// Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
// Compute the student's total exercise score: 20 + 15 + 40 = 75
// Apply weights to determine final percent grade: 84 * .65 + 75 * .35 = 80.85
// Round the percent grade to the nearest integer: 81
// Lookup the letter grade in the table above: C
// Combine the percent grade and letter grade: "81 (C)"

// Student data format:
// let studentScores = {
//   student1: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: [],
//     },
//   },
//  . . .
// }

// output format:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

// process:
// 1. get student grades
//    - map studentScores to studentGrades
//      - map studentScores keys to object containing exams and exercises
//      - reduce exams to average
//      - reduce exercises to sum
//      - calculate score output
//  2. get exam grades
//    - map studentScores to exams object
//    - map to array of arrays
//    - redistribute exam scores (from scores per student to scores per exam)
//    - reduce each subarray to avg/min/max

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function getStudentGrades(scores) {
  return scores
    .map(({exams, exercises}) => [getAverage(exams), getSum(exercises)])
    .map(([exams, exercises]) => getWeightedScore(exams, exercises))
    .map(finalScore => getGradeString(finalScore));
}

function getGradeString(score) {
  let result = `${score} `;

  if (score >= 93) return result + '(A)';
  if (score >= 85) return result + '(B)';
  if (score >= 77) return result + '(C)';
  if (score >= 69) return result + '(D)';
  if (score >= 60) return result + '(E)';
  return result + '(F)';
}

function getExamSummary(exams) {
  return transpose(exams)
    .map(examScores => {
      return {
        average: getAverage(examScores),
        minimum: Math.min(...examScores),
        maximum: Math.max(...examScores),
      };
    });
}

function getWeightedScore(exams, exercises) {
  const EXAM_WEIGHT = 0.65;
  const EXERCISE_WEIGHT = 0.35;

  return Math.round((exams * EXAM_WEIGHT) + (exercises * EXERCISE_WEIGHT));
}

function getAverage(list) {
  return getSum(list) / list.length;
}

function getSum(list) {
  return list.reduce((sum, value) => sum + value, 0);
}

function transpose(arr) {
  let result = Array.from(Array(arr[0].length), () => new Array(arr.length));

  arr.forEach((subarray, idx) => {
    subarray.forEach((element, idx2) => {
      result[idx2][idx] = element;
    });
  });

  return result;
}

function generateClassRecordSummary(scores) {
  const allScores = Object.keys(scores).map(student => scores[student].scores);
  const examScores = allScores.map(({exams}) => exams);

  const studentGrades = getStudentGrades(allScores);
  const exams = getExamSummary(examScores);

  return { studentGrades, exams };
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
