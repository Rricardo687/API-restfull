     //  variables//
     const d = document;
     const apiUrl = 'http://localhost:4000/api/v2/users';
     const $main = d.querySelector('main');
     const $h1 = d.createElement('h1');
     const $input = d.createElement('input');
     const $crearbtn = d.createElement('button');
     const $ol = d.createElement('ol');

     $h1.textContent = 'lista de usuarios';
    $main.appendChild($h1);
    $main.appendChild($input);
    $crearbtn.setAttribute('id','crearbtn');
    $crearbtn.textContent = 'crear usuario';
    $main.appendChild($crearbtn);

    let usuarios = null;
    let $botonesEliminar = null;



     // eventos //
     d.addEventListener('DOMContentLoaded', () => {
        leerusuarios();
        escuchareventos();
      });
      const escuchareventos =() =>{
       $crearbtn.addEventListener('click', crearusuario)
      };
      const vigilarEliminar = (botones) => {
         //console.log(botones);
         botones.forEach((boton) => {
           const id = boton.parentNode.id;
           //console.log(id);
           boton.addEventListener('click', () => eliminarusuario(id));

         });
       };


     // funciones //
     const crearusuario = () => {
      
      const usuarios = {
        name: $input.value,
        completed: false,
      };
      
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarios),
      })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          
          if (datos.success) {
            leerusuarios();
            $input.value = null;
          }
        })
        .catch((error) => console.log('error:', error));
    };
     const leerusuarios = ()=>{
        $ol.innerHTML = null;
        fetch(apiUrl)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
        usuarios= datos.success
        usuarios.forEach(elemento => {
            
            const $li = d.createElement('li') 
            $li.setAttribute('id', elemento._id);

            const $borrarBtn = d.createElement('button');

            $li.appendChild(d.createTextNode(elemento.name));
            $borrarBtn.classList.add('eliminar');
            $borrarBtn.textContent = 'Eliminar';
            $li.appendChild($borrarBtn);
            $ol.appendChild($li);
        });
        $main.appendChild($ol);
        $botonesEliminar = d.querySelectorAll('.eliminar');
        vigilarEliminar($botonesEliminar);
        })
        .catch((error)=> console.log('error', error));
     };
     const eliminarusuario = (id) => {
       // console.log('id:',id);
       fetch(`${apiUrl}/${id}`, {
         method: 'DELETE',
       })
         .then((respuesta) => leerusuarios())
         .catch((error) => console.log('error:', error));
     };