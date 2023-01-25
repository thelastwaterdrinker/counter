//We first check if there is any value in local storage for counter, and then if there is not set it to 0.
if(!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}
function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter); //Set the new value to local storage value

    if (counter %10 === 0) {
        alert(`Count is now ${counter}`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
});