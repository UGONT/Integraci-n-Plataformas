document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-registro');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const usuario = document.getElementById('usuario').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const repetirContrasena = document.getElementById('repetir-contrasena').value;
    const telefono = document.getElementById('telefono').value;

    if (contrasena !== repetirContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const nuevoUsuario = {
      nombre,
      usuario,
      correo,
      contrasena,
      telefono
    };

    console.log('Usuario registrado:', JSON.stringify(nuevoUsuario, null, 2));
    alert('¡Usuario registrado exitosamente! (Simulado en consola)');
    
    form.reset();
  });
});