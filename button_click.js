document.getElementById('btn_user').addEventListener('click', function () {

    const input = document.getElementById('input_').value
    console.log(input)
    const user = document.getElementById('user_name')
    user.innerText = input
})