class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo.toLowerCase()
    }

    atacar() {
        switch (this.tipo) {
            case "mago":
                console.log(this.tipo + " atacou usando magia")
                break;
            case "gerreiro":
                console.log(this.tipo + " atacou usando espada")
                break;
            case "monge":
                console.log(this.tipo + " atacou usando artes marciais")
                break;
            case "ninja":
                console.log(this.tipo + " atacou usando shuriken")
                break;
        }
    }
}

let mulherMaravilha = new Heroi("Mulher Maravilha", 30, "ninja")

mulherMaravilha.atacar()

