fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(res => reload(res))

let main = document.querySelector('.main')

function reload(arr) {
    for (let item of arr) {
        let block = document.createElement('div')
        let inp = document.createElement('input')
        let title = document.createElement('h4')
        let descr = document.createElement('p')
        let day = document.createElement('p')

        block.classList.add('block')
        title.classList.add('title')
        descr.classList.add('descr')
        day.classList.add('day')

        title.innerHTML = item.title
        inp.innerHTML = item.title
        inp.type = "checkbox"
        title.id = item.id
        descr.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae."
        day.innerHTML = "Today"

        if (item.completed === true) {
            inp.checked
        } 
        
        main.append(block)
        block.append(inp, title, descr, day)

    }
}






















