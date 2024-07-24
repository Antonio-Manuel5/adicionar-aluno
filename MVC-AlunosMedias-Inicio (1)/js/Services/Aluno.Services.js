class AlunosService{
    constructor(){
        this.alunos = []
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("aluno Model não é uma instance")
        }
        this.alunos.push(aluno)
    }
    edit(aluno){
        return aluno
    }
    
}