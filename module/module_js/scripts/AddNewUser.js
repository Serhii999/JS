function createFormField (config){
    const {name, text, placeholder} = config

    const label = document.createElement('div')
    label.textContent = text;
    label.className = 'label'

    const input = document.createElement('input')
    input.name = name;
    input.placeholder = placeholder;

    const wrapper = document.createElement('div');
    wrapper.className = 'form-field';
    wrapper.appendChild(label)
    wrapper.appendChild(input)
    return wrapper
}

const FORM_CONFIG = [
    {
    name: 'name',
    text: 'Name',
    placeholder: 'Enter your user name',},
     {
    name: 'email',
    text: 'Email',
    placeholder: 'Enter your Email',},
     {
    name: 'website',
    text: 'Website',
    placeholder: 'Enter your website',}

]



const BUTTON_CONFIG = [
    {
        type: 'button',
        text: 'Cancel',
        color: 'danger',
    },
    {
        type: 'submit',
        text: 'Save',
        color: 'success',
    },
]


function createButton (config) {
    const {type, text, color} = config
    const button = document.createElement('button')
    button.type = type
    button.textContent = text
    button.className = `button-${color}`

    return button
}

function addFormUserCard(user){
	const {
		name,
		email,
		website,
	} = user;

	const userCard = document.createElement('div');
	userCard.className = 'user-card';

	const info = document.createElement('div');
	info.className = 'user-info';

	const userName = document.createElement('h4');
	userName.textContent = name;

	const userEmail = document.createElement('div');
	userEmail.textContent = `Email: ${email}, website: ${website}`;

	const userAvater = document.createElement('img');
	userAvater.src = AVATAR_URL + name;

	userCard.appendChild(userAvater);
	userCard.appendChild(info);
	info.appendChild(userName);
	info.appendChild(userEmail);

	const userButton = document.getElementById('add-new-user');

	userButton.after(userCard);

	userCard.id = "add-user";
	setTimeout(function() {
		userCard.id = '';
	}, 7000);
}

function onSubmit(event){
    event.preventDefault();

    const elements = event.target.elements

    const newUser = {
        name: elements.name.value,
        email: elements.email.value,
        website: elements.website.value,
        id: Math.random()
    }

    if (newUser.name.length > 4 && newUser.email.length > 4 && newUser.website.length > 4)
    {
		const addedForm = document.getElementsByTagName('form');
		addedForm[0].remove();
		addFormUserCard(newUser);
	} else {
		let validationError = document.getElementsByTagName('p');
	    if (validationError.length == 0)
	    {
			validationError = document.createElement('p');
			validationError.className = 'validation-error';
			validationError.textContent = "The fields must be more than four characters";
			const infoError = document.getElementsByClassName('form-field');
			infoError[2].after(validationError);
		}
	}
}


function onButtonClick(event) {
    const form = document.createElement('form')

    const dontAddNewForm = document.getElementsByTagName('form');
	if (dontAddNewForm.length > 0) {
		dontAddNewForm[0].remove();
	}

    FORM_CONFIG.forEach(config =>{
        const formField= createFormField(config)

        form.appendChild(formField)
    })
    const addUserButton = event.currentTarget
    addUserButton.after(form)
    const buttonsWrapper = document.createElement('div')
    buttonsWrapper.className = 'buttons-wrapper'
    BUTTON_CONFIG.forEach(config => {
        const button = createButton(config)

        if(config.type === 'button') {


            button.onclick = () => {
                form.remove()
            }
        }
        buttonsWrapper.appendChild(button)
    })
    form.appendChild(buttonsWrapper)
    form.onsubmit = onSubmit;
    addUserButton.after(form)
}
function addNewUserButtonHandler() {
    const buttonElement =document.getElementById('add-new-user');

    buttonElement.onclick = onButtonClick;


}
