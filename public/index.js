document.querySelector('#submit').addEventListener('click', code)
async function code(){
    const input = document.querySelector('input').value
    const res = await fetch(`/api/${input.toLowerCase()}`)
    const data = await res.json()
    document.querySelector('h2').innerText = `${input} code is ${data.code}`
    console.log(data)
}