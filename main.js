class Preguntas{
  constructor(pregunta, votos, respuestas, respuestaCorrecta){
    this.pregunta = pregunta
    this.votos = votos
    this.respuestas = respuestas
    this.respuestaCorrecta = respuestaCorrecta
  }
  votarOp1(){
    this.votos.push(1)
  }
  votarOp2(){
    this.votos.push(2)
  }
  votarOp3(){
    this.votos.push(3)
  }
  votarOp4(){
    this.votos.push(4)
  }
  
  countVotes(opcion){
    const result = this.votos.filter((item) => item === opcion).length
    return result
  }
}

const pregunta1 = new Preguntas(
  "¿Cuál es el lenguaje de programación en la web?", 
  [], 
  ["php", "go", "phyton", "JS"], 
  "JS"
)

const pregunta2 = new Preguntas(
  "¿Cuál es el lenguaje de estilos en la web?", 
  [], 
  ["php", "LESS", "SASS", "CSS"], 
  "CSS"
)

pregunta1.votarOp1()
pregunta1.votarOp2()
pregunta1.votarOp2()
pregunta1.votarOp2()
pregunta1.votarOp2()
pregunta1.votarOp2()
pregunta1.votarOp3()
pregunta1.votarOp3()
pregunta1.votarOp3()
pregunta2.votarOp1()
pregunta2.votarOp2()
pregunta2.votarOp2()
pregunta2.votarOp2()
pregunta2.votarOp2()
pregunta2.votarOp2()
pregunta2.votarOp3()
pregunta2.votarOp3()
pregunta2.votarOp3()

const totalVotes = (num) => {
  console.log(pregunta1.countVotes(num), pregunta1.respuestas[num - 1])
}

const totalVotes2 = (num) => {
  console.log(pregunta2.countVotes(num), pregunta2.respuestas[num - 1])
}

console.log(pregunta1.pregunta)
totalVotes(1)
totalVotes(2)
totalVotes(3)

console.log(pregunta2.pregunta)

totalVotes2(1)
totalVotes2(2)
totalVotes2(3)

const PreguntasFunc = [
 {
  pregunta: "Candidato1", 
  votos : [], 
 },
 {
  pregunta: "Candidato2", 
  votos : [], 
 }
]

const vota1 = () => {
  PreguntasFunc[0].votos.push(1)
}

const vota2 = () => {
  PreguntasFunc[1].votos.push(1)
}

vota1()
vota1()
vota1()
vota1()
vota1()
vota2()
vota2()
vota2()
vota2()
vota2()
vota2()
vota2()
vota2()
vota2()

const countVotesFunc = (index) => {
  const initial = 0
  const sum = PreguntasFunc[index].votos.reduce(
    (acc, cur) => acc + cur, initial
  )
  console.log(sum, PreguntasFunc[index].pregunta)
}

console.log("Vota por tu candidato")
countVotesFunc(1)
countVotesFunc(0)
