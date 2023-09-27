// Variables
const foto_usuario = document.querySelector('#usuario_foto');
const apellido_usuario = document.querySelector('#usuario_apellido');
const nombre_usuario = document.querySelector('#usuario_nombre');
const mail_usuario = document.querySelector('#usuario_mail');
const celular_usuario = document.querySelector('#usuario_celular');


// Funciones
const datos_usuario = async () => {
    const url= "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto_usuario.src = datos.picture.medium;
    apellido_usuario.textContent = datos.name.last;
    nombre_usuario.textContent = datos.name.first;
    mail_usuario.textContent = datos.email;
    celular_usuario.textContent = datos.cell;
}

datos_usuario();
