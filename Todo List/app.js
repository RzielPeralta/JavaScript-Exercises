
//funcion para salir de la app
let  input = prompt("What would you like to do?")//escribe una opcion del menu
const todos = ['Collect Chicken Eggs', 'Clean Little Box']; //ejemplo de que escribir/formato
while (input !== 'quit' && input !== 'q'){
    if(input === 'list'){
        console.log('*************')
        for(let i=0; i<todos.length; i++){
            console.log(`${i}:${todos[i]}`);//imprime lo que se va guardando en la lista
        }
        console.log('*************')
//funcion para añadir item
    }else if(input='new'){
        const newTodo = prompt('Ok What is the new todo?');
        todos.push(newTodo); //añade item a lista
        console.log(`${newTodo} added to the list!`); //imprime item añadido
//funcion para borrar item
    }else if( input ==='delete'){
        const indexStr = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)){
        const deleted = todos.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
        }else{
            console.log('Unknown index')
        }
    }
    input = prompt("What would you like to do?")
}
console.log("OK QUIT THE APP")
