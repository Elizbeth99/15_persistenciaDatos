const nombre= "Elizbeth"
const apellido= "Romero"

const datos= 
{
    nombre,
    apellido
}

const now = new Date()

localStorage.removeItem("nombre")
sessionStorage.setItem("nombre-sesion","Elizbeth")
document.cookie= "nombreCookie=ElizbethCookie"
document.cookie= "nombreCaducidad=Nombre;
expires="+new Date(2022,0,1).toUTCString()

console.log(document.cookie)