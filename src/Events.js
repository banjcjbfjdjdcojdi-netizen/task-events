export function createButton() {
  const btn = document.createElement('button');
  btn.textContent = 'Удали меня';
  btn.addEventListener('click', function() {
    this.remove();
  });
  document.body.appendChild(btn);
}

export function createArrList(arr) {
  const ul = document.createElement('ul');
  arr.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('mouseover', function() {
      this.setAttribute('title', this.textContent);
    });
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}

export function createLink() {
  const a = document.createElement('a');
  a.href = 'https://tensor.ru/';
  a.textContent = 'tensor';
  a.addEventListener('click', function(event) {
    if (!this.textContent.includes(this.href)) {
      event.preventDefault();
      this.textContent = `${this.textContent} ${this.href}`;
    }
  });
  document.body.appendChild(a);
}

export function createList() {
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.textContent = 'Пункт';
  
  function addClickHandler(element) {
    element.addEventListener('click', function() {
      this.textContent += '!';
    });
  }
  
  addClickHandler(li);
  ul.appendChild(li);
  
  const btn = document.createElement('button');
  btn.textContent = 'Добавить пункт';
  btn.addEventListener('click', function() {
    const newLi = document.createElement('li');
    newLi.textContent = 'Пункт';
    addClickHandler(newLi);
    ul.appendChild(newLi);
  });
  
  document.body.appendChild(ul);
  document.body.appendChild(btn);
}