let letters = [];
let somestr = 'Backend As A Service'
let splitedstr = somestr.split(' ')

splitedstr.forEach(function (letter, index){
    letters[index]= letter[0]

})

console.log(letters)
console.log(letters.join(''));



function OneArgument(argument){
    if (Number.isInteger(argument)){
        console.log(new Date())

    }
    else {
        console.log('Неверный тип данных')
    }
}
console.log(OneArgument(4))


function self(){
      console.log(arguments.callee)
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
self('google', 10, false)


function userInfo(user){
    if(user.registered){
        console.log('Дата регистрации:' + user.data)
    }
    else{
        console.log('Пользователь не зарегистрирован, имя:' + user.name)
    }
}

const user1={
    name: 'Serhii',
    registered: true,
    data: '09.09.2019',
    getInfo: userInfo
}

const user2={
    name: 'Anton',
    registered: false,
    data: '',
    getInfo: userInfo
}

userInfo(user1)
userInfo(user2)


var users = {
        14587: {
                name: "Ivan",
                email: "ivan78@gmail.com"
        },
        28419: {
                name: "Georg",
                email: "georg.klep@gmail.com"
        },
        41457: {
                name: "Stephan",
                email: "stephan.borg@gmail.com"
        }
}
var posts = {
        7891451: {
                author: 14587,
                text: "Imagine we can encapsulate these secondary responsibilities in functions"
        },
        7891452: {
                author: 28419,
                text: `В конструкторе ключевое слово super используется как функция, вызывающая родительский конструктор. 
                        Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора. 
                        Ключевое слово super также может быть использовано для вызова функций родительского объекта`
        },
        7891453: {
                author: 28419,
                text: `DOM не обрабатывает или не вынуждает проверять пространство имен как таковое. 
                        Префикс пространства имен, когда он связан с конкретным узлом, не может быть изменен`
        },
        7891454: {
                author: 14587,
                text: "Ключевое слово super используется для вызова функций, принадлежащих родителю объекта"
        }
}
var comments = {
        91078454: {
                postId: 7891451,
                author: 28419,
                text: `The static String.fromCharCode() method returns a string created 
                        from the specified sequence of UTF-16 code units`
        },
        91078455: {
                postId: 7891451,
                author: 41457,
                text: `HTML элемент <template> — это механизм для отложенного рендера клиентского контента, 
                        который не отображается во время загрузки, но может быть инициализирован при помощи JavaScript`
        },
        91078457: {
                postId: 7891452,
                author: 41457,
                text: "Глобальный объект String является конструктором строк, или, последовательностей символов"
        },
        91078458: {
                postId: 7891452,
                author: 14587,
                text: `The Element.namespaceURI read-only property returns the namespace URI of the element, 
                        or null if the element is not in a namespace`
        }
}

function getPostComments(postId){
    var result =[]
     for (let key in comments){
        let comment = comments[key]
        if (comment.postId == postId) {
            let authorId = comment.author
            for (let id in users){
                if (id == authorId) {
                    result.push({
                        name: users[id].name,
                        text: comment.text,
                    })
                }
            }
        }
    }
    return result
}


console.log ( getPostComments (   7891452, ) );