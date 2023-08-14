import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Resto de tu código...

const nombre = document.getElementById("nombre");
const btenviar = document.getElementById("btenviar"); // Asegúrate de tener un elemento con el ID "btenviar" en tu HTML.

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsMMhgz99N0aTF2kUmcrLmf7sMTVoSWDw",
  authDomain: "anonimus-pro-2f485.firebaseapp.com",
  databaseURL: "https://anonimus-pro-2f485-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "anonimus-pro-2f485",
  storageBucket: "anonimus-pro-2f485.appspot.com",
  messagingSenderId: "1069181404701",
  appId: "1:1069181404701:web:8c91a0160f202b815968f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Configurar la referencia a la base de datos en tiempo real de Firebase
const database = firebase.database();

btenviar.addEventListener('click', (e) => {
  e.preventDefault();
  database.ref('/User').set({
    campo1: nombre.value
  }, (error) => {
    if (error) {
      console.error('Error al guardar en la base de datos en tiempo real:', error);
    } else {
      console.log('Datos guardados en la base de datos en tiempo real.');
      nombre.value = ''; // Limpiar el campo después de guardar
    }
  });
});


/*

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener el formulario de inscripción
const registrationForm = document.getElementById("registration-form");

// Agregar un evento al enviar el formulario
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos del formulario
  const nombre = registrationForm.nombre.value;
  const apellido = registrationForm.apellido.value;
  const edad = registrationForm.edad.value;
  const email = registrationForm.email.value;

  // Guardar los datos en Firebase Firestore
  addDoc(collection(db, "registros"), {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    email: email,
    fechaNacimiento: fechaNacimiento,
    direccion: direccion,
    numeroTarjeta: numeroTarjeta,
    fechaVencimiento: fechaVencimiento,
    codigoSeguridad: codigoSeguridad,  
  })
    .then(() => {
      // Limpiar los campos del formulario después de guardar los datos
      registrationForm.reset();
      console.log("Datos guardados en Firebase Firestore");
    })
    .catch((error) => {
      console.error("Error al guardar los datos en Firebase Firestore:", error);
    });
});

*/
