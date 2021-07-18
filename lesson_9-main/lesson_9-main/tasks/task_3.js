/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в класс из апи: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/
const result = document.querySelector('.result-task-3');


class Posts{
    constructor(options) {
        this._id = options._id,
        this.isActive = options.isActive,
        this.title = options.title,
        this.about = options.about,
        this.likes = 0,
        this.created_at = options.created_at

    }

    addLike(){
        this.likes++
    }

    render(){
        result.innerHTML += `
        <div>${this._id}</div>
        <div>${this.isActive}</div>
        <div>${this.title}</div>
        <div>${this.about}</div>
        <div>${this.likes}</div>
        <div>${this.created_at}</div>
        <button class="addLiks">Like</button>
        `
    }
}

if (!localStorage.getItem('Posts')){
    fetch('http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2')
    .then(respons => respons.json())
    .then(res => {
        localStorage.setItem('Posts', JSON.stringify(res))
        res.map(item => {
            let post = new Posts(item)
            post.render()

        })
    })

    console.log(btn);
}else {
    const data = JSON.parse(localStorage.getItem('Posts'))
    data.map(item => {
        let post = new Posts(item)
        post.render()
    })
}





