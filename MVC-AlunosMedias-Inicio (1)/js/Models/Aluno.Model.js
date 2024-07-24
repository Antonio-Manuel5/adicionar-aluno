class AlunoModel{
    constructor({nome, _id, notas} = {notas: {}}){
        this.nome = nome
        this._id = (_id !== undefined) ? _id : this.genereteId()
        this.notas = {...notas}

        if(this._id > AlunoModel.maxId){
            AlunoModel.maxId = this._id
        }

        this.media = {}
        for(let materia in this.notas){
            this.media[materia] = avarege(...this.notas[materia])
        }
    }

    genereteId(){
        return AlunoModel.maxId + 1
    }
}
AlunoModel.maxId = 0