const infoLibros = document.getElementById('info-libros');

const url = 'https://harry-potter-api-production.up.railway.app/libros';

fetch(url)
  .then((resp) => resp.json())
  .then((data) => printData(data))
  .catch((error) => console.log(error))


  const printData = (arr) => {
    let str = '';
    for(let i = 0; i < arr.length; i++){
      const id = arr[i].id
      const libro = arr[i].libro
      const fechaLanzamiento = arr[i].fecha_de_lanzamiento
      const autora = arr[i].autora
      const descripcion = arr[i].descripcion
      str = str + `
      
         <div class="libros">
         <h2>${libro}</h2>
         <p>Orden: ${id}</li>        
         <p>Fecha de Lanzamiento: ${fechaLanzamiento}</p> 
         <p>Autora: ${autora}</p> 
         <p>Descripcion: ${descripcion}</p>                    
          </div>

      `
    }
    infoLibros.innerHTML = str;
  }