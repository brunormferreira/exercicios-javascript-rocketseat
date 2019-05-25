function temHabilidade(skills) {
    return skills.indexOf("Javascript") !== -1;
}

var skills = ["Javascript", "React", "React Native"];
console.log(temHabilidade(skills)); // true or false