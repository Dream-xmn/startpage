const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-q");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const TODO_KEY = "startpage-todos";

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (!query) {
    searchInput.focus();
    return;
  }
  const engine = event.submitter && event.submitter.value === "google" ? "google" : "baidu";
  const url = engine === "google"
    ? "https://www.google.com/search?q=" + encodeURIComponent(query)
    : "https://www.baidu.com/s?wd=" + encodeURIComponent(query);
  window.location.href = url;
});

function loadTodos() {
  try {
    const raw = localStorage.getItem(TODO_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function renderTodos() {
  const todos = loadTodos();
  todoList.replaceChildren();
  if (todos.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "还没有待办。";
    todoList.append(empty);
    return;
  }
  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = "todo-item" + (todo.done ? " done" : "");

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(todo.done);
    checkbox.addEventListener("change", () => {
      const next = loadTodos().map((entry) => {
        if (entry.id === todo.id) {
          return { id: entry.id, text: entry.text, done: checkbox.checked };
        }
        return entry;
      });
      saveTodos(next);
      renderTodos();
    });

    const text = document.createElement("span");
    text.textContent = todo.text;
    label.append(checkbox, text);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "linkish";
    remove.textContent = "删除";
    remove.addEventListener("click", () => {
      saveTodos(loadTodos().filter((entry) => entry.id !== todo.id));
      renderTodos();
    });

    item.append(label, remove);
    todoList.append(item);
  });
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (!text) {
    return;
  }
  const todos = loadTodos();
  todos.unshift({ id: Date.now(), text: text, done: false });
  saveTodos(todos);
  todoInput.value = "";
  renderTodos();
});

renderTodos();
