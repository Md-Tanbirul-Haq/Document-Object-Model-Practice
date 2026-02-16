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