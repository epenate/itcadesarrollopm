document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const resultado = document.getElementById('resultado');

    fetch('http://localhost:8000/api/consultar-usuario/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            resultado.textContent = data.error;
        } else {
            resultado.textContent = `Usuario: ${data.username}, Contraseña: ${data.password}`;
        }
    })
    .catch(error => {
        resultado.textContent = 'Error al consultar la API';
    });
});
