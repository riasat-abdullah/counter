let count = 0;

const displayElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');

incrementButton.addEventListener('click', incrementCount);

function incrementCount() {
  count += 1;
  displayElement.innerText = count;
}
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', decrementCount);

function decrementCount(){

    count -=1
    displayElement.innerText = count;
}

