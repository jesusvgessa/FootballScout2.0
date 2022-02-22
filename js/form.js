// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
    .forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })

window.onload = load;

function load() {
    //Entorno:
    var registrar = document.getElementById("registro");

    //Inputs
    var nombre = document.getElementById("nombre");
    var apes = document.getElementById("apes");
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");
    var pass2 = document.getElementById("pass2");
    var error = document.getElementById("errores");

    //Pattern:
    var patternNombre = /(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/;
    var patternApes = /(^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{4,40}))+$/;
    var patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var patternPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,18}$/;

    //Asigno un interruptor a cada variable para despues realizar la validación del formulario
    var enviarNombre = false;
    var enviarApes = false;
    var enviarEmail = false;
    var enviarPass = false;
    var enviarPass2 = false;

    //Eventos:
    nombre.addEventListener("blur", validar);
    apes.addEventListener("blur", validarApes);
    email.addEventListener("blur", validarEmail);
    pass.addEventListener("blur", validarPass);
    pass2.addEventListener("blur", validarPass2);
    registrar.addEventListener("submit", validarEnviar);

    function borrarError() {
        if (error.innerText.length != 0) {
            error.removeChild(error.firstChild);
        } //Fin Si
    } //Fin Función

    function validar() {
        borrarError();
        if (!patternNombre.test(this.value)) {
            error.innerHTML = "ERROR: El nombre debe contener entre 3 y 16 letras*.";
            nombre.setAttribute("class", "error");
            enviarNombre = false;
        } else {
            nombre.removeAttribute("class");
            enviarNombre = true;
        } //Fin Si
    } //Fin Funcion

    function validarApes() {
        borrarError();
        if (!patternApes.test(this.value)) {
            error.innerHTML = "ERROR: Debe introducir los 2 apellidos.";
            apes.setAttribute("class", "error");
            enviarApes = false;
        } else {
            apes.removeAttribute("class");
            enviarApes = true;
        } //Fin Si
    } //Fin Funcion

    function validarEmail() {
        borrarError();
        if (!patternEmail.test(this.value)) {
            error.innerHTML = "ERROR: El email debe contener @ y .";
            this.setAttribute("class", "error");
            enviarEmail = false;
        } else {
            this.removeAttribute("class");
            enviarEmail = true;
        } //Fin Si
    } //Fin Funcion

    function validarPass() {
        borrarError();
        if (!patternPass.test(this.value)) {
            error.innerHTML = "ERROR: La contraseña debe tener entre 8 y 18 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.";
            this.setAttribute("class", "error");
            enviarPass = false;
        } else {
            this.removeAttribute("class");
            enviarPass = true;
        } //Fin Si
    } //Fin funcion

    function validarPass2() {
        borrarError();
        if (pass.value != pass2.value) {
            error.innerHTML = "ERROR: Las contraseñas deben ser iguales.";
            this.setAttribute("class", "error");
            enviarPass2 = false;
        } else {
            this.removeAttribute("class");
            enviarPass2 = true;
        } //Fin Si
    } //Fin funcion

    function validarEnviar(evento) {
        if (!enviarUsuario || !enviarEmail || !enviarPass || !enviarPass2) {
            borrarError();
            error.innerHTML = "No se puede enviar el formulario con campos invalidos/vacios.";
            evento.preventDefault();
        } else {
            var confirmacion = confirm("Crear usuario");
            if (!confirmacion) {
                evento.preventDefault();
            } //Fin Si
        } //Fin Si
    } //Fin Funcion
}