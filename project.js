console.log("How are you?")
const value = document.getElementsByTagName('li')
const ul_tag = document.getElementsByTagName('ul')[0]
ul_tag.style.borderRadius = '10px'
ul_tag.style.backgroundColor = 'red'
for (const v of value) {

    v.style.padding = '10px'
}

const project_1 = document.getElementById('project_1')
console.log(project_1.innerText)
project_1.innerText = "project_1 Update"
project_1.innerHTML = `
<h1>project_1 Update</h1>

`

const project = document.getElementsByClassName('project')


for (const p of project) {
    p.style.color = 'White'
    p.style.fontSize = '40px'
    p.style.fontWeight = 'bold'
    p.innerHTML = `
    <h1><u>${p.innerText}</u></h1>

    `
}


const project_2 = document.getElementById('project_2')
console.log(project_2.innerText)
const ul = document.createElement('ul')

ul.innerHTML = `
<li>project_1</li>
<li>project_2</li>

`
project_2.appendChild(ul)
box = document.createElement('div')
box.style.display = 'flex'
box.style.gap = '10px'
box.style.flexWrap = 'wrap'


for (let i = 0; i < 20; i++) {
    const div = document.createElement('div')

    div.innerHTML = `
    <p>Box</p>
`
    div.style.borderRadius = '10px'
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.backgroundColor = 'red'
    div.style.textAlign = 'center'
    div.style.padding = '10px'

    box.appendChild(div)
}
project_2.append(box)

