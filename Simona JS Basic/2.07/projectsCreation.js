function projectsCreation(input){
    let name = input[0]
    let count = Number(input[1])
    let hours = 3 * count
    let res = `The architect ${name} will need ${hours} hours to complete ${count} project/s.`
    console.log(res)
}
projectsCreation(["George","4"])