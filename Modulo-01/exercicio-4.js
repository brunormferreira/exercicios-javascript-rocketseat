function experiencia(anos) {
    if (anos <= 1) {
        return "Iniciante";
    } else if (anos <= 3) {
        return "Intermediário";
    } else if (anos <= 6) {
        return "Avançado";
    } else {
        return "Jedi Master";
    }
}

var anosEstudos = 7;
console.log(experiencia(anosEstudos));

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master