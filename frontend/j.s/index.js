     //  variables//
     const d = document;
     const $main = d.querySelector('main');
     const $h1 = d.createElement('h1');
     const $ol = d.createElement('ol');

     $h1.textContent = 'lista de usuarios';
    $main.appendChild($h1);

    let usuarios = null;


     // eventos //
     d.addEventListener('DOMContentLoaded', () => {
        leerusuarios();
      });


     // funciones //
     const leerusuarios = ()=>{
        fetch('http://localhost:4000/api/v2/users')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
        usuarios= datos.success
        usuarios.forEach(elemento => {
            //console.log(elemento);
            const $li = d.createElement('li') 
            $li.appendChild(d.createTextNode(elemento.name));
        });
        })
        .catch((error)=> console.log('error', error));
     };
     