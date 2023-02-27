// 1
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];
//   const newStudents = [
//     { name: "Eve", grade: 88 },
//     { name: "Frank", grade: 92 }
//     ];
//   const allStudents = students.concat(newStudents);
//   console.log(allStudents);

// 2
//   const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];

//   for (const [key, value] of Object.entries(students)) {
//     console.log(`The key ${key} has value of name as ${value.name} and grade as ${value.grade}`);
//   }

// 3
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];
    
//     const result = students.every((student) => student.grade >= 70);
//     console.log(result)

// 4
//   const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];
    
//   // const result = students.fill(100);
//   const result = students.fill(100);
  
//   console.log(result);

// 5
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];
    
//     const result = students.filter(({ grade }) => grade > 90);
  
//   console.log(result);

// 6
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];
    
//     const result = students.find(({ name }) => name === 'Charlie');
//     console.log(`Charlie's grade ${result.grade}`);

// 7
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];
    
//     const findIndex = students.findIndex(student => student.grade === 85);
// console.log(findIndex)

// 8
// const nestedArray = [[1, 2], [3, 4, 5], [6]];
// const newArray = nestedArray.flat();
// console.log(newArray)

// 9
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];
//     const result = students.flatMap(({ grade }) => grade >= 70);
//     console.log(result)

// 10
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];

// students.forEach(({ name }) => console.log(name));
// console.log()

// 11
// const string = "hello world";
// const result = Array.from(string);
// console.log(result)

// 12
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];

// console.log(students.includes('eve'));

// 13
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//   ];
  
//   const bobIndex = students.findIndex((student) => student.name === "Bob");
  
//   console.log(bobIndex);

// 14
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//   ];
  
//   const stdGrades = students.map((student) => student.grade);
  
//   console.log(stdGrades);

// 15
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//   ];
  
//   students.push({ name: "Eve", grade: 75 });
//   console.log(students);

// 16
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 65 }
//   ];
  
//   students.pop(students);
//   console.log(students);

// // 17
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 65 }
//   ];
  
//   students.reverse(students);
//   console.log(students);

// 18
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 65 }
//   ];
  
//   students.shift(students);
//   console.log(students);

// // 19
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 65 }
//   ];
  
//   const totalGrade = students.reduce((sum, student) => {
//     return sum + student.grade;
//   }, 0);
  
//   const averageGrade = totalGrade / students.length;
  
//   console.log(averageGrade);