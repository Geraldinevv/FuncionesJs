document.getElementById('uno').addEventListener('click', function () {
    this.style.backgroundColor = 'black';
});

document.getElementById('dos').addEventListener('click', function () {
    this.style.backgroundColor = 'black';
});

document.getElementById('tres').addEventListener('click', function () {
    this.style.backgroundColor = 'black';
});

document.getElementById('cuatro').addEventListener('click', function () {
    this.style.backgroundColor = 'black';
});

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const keyDiv = document.getElementById('key');

    if (key === 'A') {
        keyDiv.style.backgroundColor = 'pink';

    } else if (key === 'S') {
        
        keyDiv.style.backgroundColor = 'orange';

    } else if (key === 'D') {
        keyDiv.style.backgroundColor = 'lightblue';

    } else if (key === 'Q') {
        const newDiv = document.createElement('div');
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.border = '1px solid black';
        newDiv.style.backgroundColor = 'purple';
        document.body.appendChild(newDiv);

    } else if (key === 'W') {
        const newDiv = document.createElement('div');
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.border = '1px solid black';
        newDiv.style.backgroundColor = 'grey';
        document.body.appendChild(newDiv);
        
    } else if (key === 'E') {
        const newDiv = document.createElement('div');
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.border = '1px solid black';
        newDiv.style.backgroundColor = 'brown';
        document.body.appendChild(newDiv);
    }
});