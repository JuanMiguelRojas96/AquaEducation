import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config"; 

const provider = new GoogleAuthProvider(); // Se crea la instancia de GoogleAuthProvider que se usará para el inicio de sesión con Google

//la funcion userAuthStore se encarga de manejar el estado de autenticación del usuario, lo que permite saber si el usuario está autenticado o no

const userAuthStore = create((set)=>({ // Se crea el store de autenticación
    user:null, // Se inicializa el usuario en null, lo que indica que no hay un usuario autenticado 
    loading: true, // Se inicializa la variable loading en true, lo que indica que se está cargando la información del usuario


//la función loginGoogleWithPopup se encarga de iniciar sesión con Google mediante un popup, lo que permite que el usuario inicie sesión con su cuenta de Google
loginGoogleWithPopup: async() => {
    await signInWithPopup(auth, provider)
    .catch((error) => {
        console.log(error);
    })    
},

//la función logout se encarga de cerrar la sesión del usuario, a partir de la función signOut de Firebase, por lo que el usuario se desautentica.
logout: async() => {
    await signOut(auth)
    .then(() => {
        set ({user:null})
    })
    .catch((error) => {
        console.log(error);
    });

    obserevAuthState = () => {}
}
)


