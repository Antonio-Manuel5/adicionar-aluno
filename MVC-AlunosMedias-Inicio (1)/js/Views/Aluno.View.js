class AlunosViews{
    constructor(table){
        this.tableList = table
        this.tableHeader = this.tableList.querySelector("thead")
        this.tableBody = this.tableList.querySelector("tbody")
        this.materias = ["Poertuguês", "Matemática", "História", "Ciências"]
        
        
        this.renderHeader()
    }
    
    renderHeader(){
        const htmlHeader =  document.createElement("tr")
        htmlHeader.innerHTML = "<td>Nome</td>"
        let htmlHeaderMaterias = this.materias.map(materia => {
            return "<td>"+ materia + "</td>"
        }).join("")
        htmlHeader.innerHTML += htmlHeaderMaterias
        this.tableHeader.appendChild(htmlHeader)
    }

   render(alunos){
    alunos.forEach(aluno =>{
        const htmlBody = document.createElement("tr")
        let htmlMedias = `<td>${aluno.nome}</td>`
        this.materias.forEach(materia =>{
            htmlMedias += `<td>${aluno.media[materia]}</td>`
        })
        htmlBody.innerHTML = htmlMedias
        this.tableBody.appendChild(htmlBody)
       
    })
   }
}