function createAppTitle(title) {
    //создали h2
    const appTitle = document.createElement('h2');
    //присваивае элемент который создали
    appTitle.innerHTML = title;
    //возвоащаем элемент который создали
    return appTitle;
}

function createTodoItemForm() {
    // создаем форму и элементы
    const form = document.createElement('form');
    const input = document.createElement('input');
    const buttonWrapper = document.createElement('div');
    const button = document.createElement('button');

    // Создаем классы для элементов
    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder='Введите название нового дела'
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    //Делаем структуру вкладываем дрег в друга элементы
    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    //возвращаем результат
    return {
      form,
      // Если не вернем от сюда инпут и ботон не будем иметь к ним доступа
      input,
      button,
    }
}

function createTodoList() {
    const list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
}

function createTodoItemElement(todoItem, { onDone, onDelete }) {
    const doneClass = 'list-group-item-success'
    // созаём элменты
    const item = document.createElement('li')
    // кнопки  создаем и помещаем в элемент
    const buttonGroup = document.createElement('div')
    const doneButton = document.createElement('button')
    const deleteButton = document.createElement('button')


    // устанаваливаем стили для элемента списка , а так же для размещение кнопок
    // в его правой части с помощью flex
    item.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');


    if(todoItem.done){
      item.classList.add(doneClass);
    }

    item.textContent = todoItem.name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn','btn-danger');
    deleteButton.textContent = 'Удалить';

    // Добавляем обработсик на кнопки
    doneButton.addEventListener('click', () => {
      onDone({ todoItem, element: item });
      item.classList.toggle(doneClass, todoItem.done);
    });

    deleteButton.addEventListener('click', () => {
      onDelete({ todoItem, element: item });
    });


    //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    //приложение нужен доступ к самому элементу и кнопкам, чтобы обрабатывать событие нажатия
    return item;
}


async function createTodoApp(container, title, owner) {
  const todoAppTitle = createAppTitle(title);
  const todoItemForm = createTodoItemForm();
  const todoList= createTodoList();

  const handlers = {
      onDone({todoItem}) {
          todoItem.done = !todoItem.done;
          fetch(`http://localhost:3000/api/todos/${todoItem.id}`,{
              method: 'PATCH',
              body: JSON.stringify({ done: todoItem.done }),
              headers: {
                  'Content-Type': 'application/json',
              }
          });
      },

      onDelete({ todoItem, element }) {
          if (!confirm('Вы уверены?')){
              return;
          }
          element.remove();
          fetch(`http://localhost:3000/api/todos/${todoItem.id}`, {
              method: 'DELETE',
          })
      }
  }

  container.append(todoAppTitle);
  //потому что возвращаем объект return{form,input,button}
  container.append(todoItemForm.form);
  container.append(todoList);

  // Отправляем запрос на список всех дел
  const response = await fetch(`http://localhost:3000/api/todos?owner=${owner}`);
  const todoItemLIst = await response.json();

  todoItemLIst.forEach( todoItem => {
      const todoItemElement = createTodoItemElement(todoItem, handlers);
      todoList.append(todoItemElement)
  });

  todoItemForm.form.addEventListener('submit', async function(e){
    //эта строчка необхадима, чтобы предотвратить стандартное действие браузера
    // в даном случае мы не хотим, чтобы страница перезагружалась при отправки формы
    e.preventDefault();

    //игнорируем создание элемента , если пользователь не ввёл в поле
    if (!todoItemForm.input.value) {
      return;

    }


    const response = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        body: JSON.stringify({
            name: todoItemForm.input.value.trim(),
            owner,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const todoItem = await response.json();

    const todoItemElement = createTodoItemElement(todoItem, handlers);

  //   создаем и добавляем в список новое дело с названием из поля для ввода
    todoList.append(todoItemElement)

    //обнуляем значение в поле, чтобы не пришлось его стирать вручную

    todoItemForm.input.value = '';


  });
}

export { createTodoApp }

