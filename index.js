function parseDate(dateStr) {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function sortStudents(students) {
  return students.sort((a, b) => {
     
      const totalMarksA = a.chemistry + a.biology;
      const totalMarksB = b.chemistry + b.biology;
     
      if (totalMarksA !== totalMarksB) {
          return totalMarksB - totalMarksA;
      }
     
      if (a.biology !== b.biology) {
          return b.biology - a.biology;
      }
      const dateA = parseDate(a.dob);
      const dateB = parseDate(b.dob);
      return dateA - dateB; // Earlier date comes first
  });
}


let testCase1 = [
  { name: "Leo Messi", dob: "31-12-1995", biology: 95, chemistry: 91 },
  { name: "Cristiano Ronaldo", dob: "31-05-1992", biology: 90, chemistry: 81 },
  { name: "Virat Kohli", dob: "31-12-1995", biology: 95, chemistry: 96 },
  { name: "Rohit Sharma", dob: "31-12-1995", biology: 85, chemistry: 86 },
  { name: "Viswanathan Anand", dob: "12-12-1994", biology: 99, chemistry: 10 }
];

let testCase2 = [
  { name: "Leo Messi", dob: "31-12-1995", biology: 100, chemistry: 80 },
  { name: "Cristiano Ronaldo", dob: "31-05-1992", biology: 80, chemistry: 100 },
  { name: "Virat Kohli", dob: "31-12-1995", biology: 30, chemistry: 40 },
  { name: "Rohit Sharma", dob: "31-12-1995", biology: 40, chemistry: 30 },
  { name: "Viswanathan Anand", dob: "12-12-1994", biology: 99, chemistry: 10 }
];

console.log("Sorted Test Case 1:", sortStudents(testCase1));
console.log("Sorted Test Case 2:", sortStudents(testCase2));
