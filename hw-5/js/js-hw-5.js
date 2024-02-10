const students = [
    { name: 'John', grades: [90, 87, 93, 88] },
    { name: 'Jane', grades: [78, 82, 80, 85] },
    { name: 'Mike', grades: [92, 89, 85, 78] },
    { name: 'Anna', grades: [75, 80, 92, 87] }
  ];



  const result = [];

  function mark (input) {
    let someoneMark = 0;
    for (let now of input) {
        someoneMark += now;
    }
    someoneMark = someoneMark / input.length;
    return someoneMark;
  }

  

  function names (input) {
    for (let i = 0; i < input.length; i++) {
        console.log(i);
        result.push(`У студента ${students[i].name} середній бал = ${mark(students[i].grades)}`);
        console.log(result);
        console.table(result)
    }
  }

  names (students);
 
  