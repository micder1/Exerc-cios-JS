//write a js program to get the current date:

const getDate = () =>{
    let now = new Date()

    let data = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} -- ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    return data
}

console.log(getDate())