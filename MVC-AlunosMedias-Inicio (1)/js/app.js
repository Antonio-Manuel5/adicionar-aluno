
      const alunos = [
        {
          _id: 0,
          nome: "chico melato",
          notas: {
            portugues: [1, 1, 2, 2],
            matematica: [2, 2, 2, 2],
            historia: [2, 2, 3, 3],
            ciencias: [3, 3, 3, 3],
          },
        },
        {
          _id: 1,
          nome: "talita lima",
          notas: {
            portugues: [4, 4, 4, 4],
            matematica: [4, 4, 5, 5],
            historia: [5, 5, 6, 6],
            ciencias: [7, 7, 8, 9],
          },
        },
      ];


const alunoService = new AlunosService()

//Calcula a media por materia de cada aluno e cria uma propriedade chamada media
alunos.forEach(aluno => {
    alunoService.add(new AlunoModel(aluno))

})
const alunosViews = new AlunosViews(document.querySelector("[data-table-alunos]"))

const controllers = new AlunoControl(alunoService, alunosViews)
/*
//Inserir no thead nome e cada uma das materias

const htmlHeader = document.createElement("tr")
htmlHeader.innerHTML = "<td>Nome</td>"

let htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    console.log(materia)
    return "<td>" + materia + "</td>" 
}).join("")
console.log(htmlHeaderMaterias)
htmlHeader.innerHTML += htmlHeaderMaterias
document.querySelector("[data-table-alunos] thead").appendChild(htmlHeader)


//Percorrer cada aluno e gerar o html para incluir no tbody


render()


//Adicionar alunos
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()
    const nome = document.getElementById("first_name").value
   
    const newAluno = {
        id: 3,
        nome,
        notas: {
          portugues: [1, 1, 2, 2],
          matematica: [2, 2, 2, 2],
          historia: [2, 2, 3, 3],
          ciencias: [3, 3, 3, 3],
        }, 
    }
    newAluno.media = {}

    for(let materia in newAluno.notas){
        newAluno.media[materia] = avarege(...newAluno.notas[materia])
    }
    alunos.push(newAluno)
    render()
})
    */

