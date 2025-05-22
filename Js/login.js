// Simulamos lectura del archivo JSON
const usuarios = [
  { usuario: "admin", contrasena: "1234" },
  { usuario: "usuario1", contrasena: "abcd" }
];

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('usuario').value;
  const pass = document.getElementById('contrasena').value;

  const valido = usuarios.find(u => u.usuario === user && u.contrasena === pass);
  if (valido) {
    alert("Inicio de sesión exitoso");
    // Aquí podrías redirigir, por ejemplo:
    // window.location.href = "dashboard.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});