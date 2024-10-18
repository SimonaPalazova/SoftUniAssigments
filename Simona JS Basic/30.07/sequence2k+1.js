function sequence(input){
let index = 0;
let num = input[index];
index++;
let k = 1;

while(k <= num){
    console.log(k);
    k = k*2+1;
}
}
sequence(["31"])