function info(input){

class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
    
}
for (let kitty of input) {
    let infoHolder = kitty.split(" ");
    let name = infoHolder[0];
    let age = infoHolder[1];

    let myCat = new Cat(name, age);
    myCat.meow();
}

}
info(['Mellow 2', 'Tom 5'])