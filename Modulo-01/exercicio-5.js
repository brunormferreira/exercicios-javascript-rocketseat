function listaHabilidades() {
    for (usuario of usuarios) {
        console.log("O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(", ")
        );
    }
}

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    },
    {
        nome: "Bruno",
        habilidades: ["Javascript", "Foo", "Bar"]
    }
];

console.log(listaHabilidades());