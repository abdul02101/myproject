
let arr = []
  // localStorage.clear()
export function getTodoList(owner) {
  const apiLocal = localStorage.getItem(owner)

  if(apiLocal){
    JSON.parse(apiLocal).forEach(element => {
      arr.push(element)
    });
    return JSON.parse(apiLocal);
  }else{
    return []
  }
}

export function createTodoItem({owner, name}, done = false) {
  let indificator;

  if(localStorage.getItem(owner)){
    let todoItemId = JSON.parse(localStorage.getItem(owner));
    indificator = todoItemId.length
  }else{
    indificator = arr.length
  }

  arr.push({owner, name, done, id: indificator})
  localStorage.setItem(owner, JSON.stringify(arr))

  return {owner, name, done, id: indificator}
}

export function switchTodoItemDone({todoItem}) {
  todoItem.done = !todoItem.done;

  let arrDone = JSON.parse(localStorage.getItem(todoItem.owner))

  arrDone.filter(element =>  {
    if(element.id === todoItem.id){
      element.done = todoItem.done
      localStorage.setItem(todoItem.owner, JSON.stringify(arrDone))
    }
  })
}

export async function deleteTodoItem({element, todoItem}) {
  if (!confirm('Вы уверены?')){
    return;
  }
  element.remove();

  let arrDelete = JSON.parse(localStorage.getItem(todoItem.owner))

  arrDelete.filter((child, i, arr) =>  {
    if(child.id === todoItem.id){
      arr.splice(arr.indexOf(child), 1)
    }
  })

  localStorage.setItem(todoItem.owner, JSON.stringify(arrDelete))


}
