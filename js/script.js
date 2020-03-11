//ET - 10 hours, AT - 13 hours

document.querySelector('body').addEventListener('click', clickHandler);

function clickHandler(event) {
    if(!event.target.hasAttribute('editable')) return;

    event.preventDefault();
    const targetElement = event.target;
    const type = targetElement.getAttribute('editable');

    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', type);

    targetElement.parentNode.appendChild(inputElement);
    inputElement.value = targetElement.innerText;
    inputElement.classList.add('form-control');

    let btnSave = document.createElement('button');
    btnSave.classList.add('btn', 'btn-primary', 'btn-xs');
    let iconBtnSave = document.createElement('span');
    btnSave.appendChild(iconBtnSave);
    btnSave.firstElementChild.classList.add('glyphicon', 'glyphicon-ok');
    targetElement.parentNode.appendChild(btnSave);

    let btnCancel = document.createElement('button');
    btnCancel.classList.add('btn', 'btn-danger', 'btn-xs');
    let iconBtnCancel = document.createElement('span');
    btnCancel.appendChild(iconBtnCancel);
    btnCancel.firstElementChild.classList.add('glyphicon', 'glyphicon-remove');
    targetElement.parentNode.appendChild(btnCancel);

    // inputElement.focus();
    inputElement.select();

    inputElement.addEventListener('blur', function(event) {
        console.log(targetElement);
        targetElement.parentNode.appendChild(targetElement);
        console.log(  targetElement.parentNode.appendChild(targetElement));
		targetElement.parentNode.removeChild(inputElement);
		targetElement.parentNode.removeChild(btnSave);
		targetElement.parentNode.removeChild(btnCancel);
	});


    inputElement.addEventListener('keyup', function(event) {
        switch (event.which) {
            case 13:  //save
                targetElement.innerText = inputElement.value;
                inputElement.blur();
                break;
            case 27:  //cancel
                inputElement.blur();
                break;
        }    
    });

    
    btnSave.addEventListener('mousedown', function () {
        targetElement.innerText = inputElement.value;
        inputElement.blur();
    });

    btnCancel.addEventListener('mousedown', function() {
        inputElement.blur();
    });
}