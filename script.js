let students = [
  {name: 'João', grade1: 5.0, grade2: 6.5},
  {name: 'Letícia', grade1: 8.0, grade2: 7.5},
  {name: 'Diego', grade1: 6.5, grade2: 8.5},
  {name: 'Julia', grade1: 6.0, grade2: 5.0},
  {name: 'Jonathan', grade1: 7.0, grade2: 8.0},
  {name: 'Rafaela', grade1: 6.0, grade2: 9.0},
  {name: 'Gabriel', grade1: 4.0, grade2: 5.0}
]

function average(grade1, grade2) {
  let result = (grade1 + grade2) / 2
  return result.toFixed(2)
}

for (const student of students) {
  let averageGrade = average(student.grade1, student.grade2)

  if (averageGrade >= 7) {
    alert(`
      A média do(a) aluno(a) ${student.name} é: ${averageGrade} 
      Parabéns, ${student.name}! você foi aprovado(a) no concurso!
    `)
  } 

  else {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${averageGrade} 
    Não foi dessa vez, ${student.name}! Tente novamente!
  `)
  }
}