
const tarjetas = document.getElementById('tarjetas');

const url = 'https://harry-potter-api-production.up.railway.app/hechizos';

fetch(url)
  .then((resp) => resp.json())
  .then((data) => printData(data))
  .catch((error) => console.log(error))


  const printData = (arr) => {
    let str = '';
    for(let i = 0; i < arr.length; i++){
      const hechizo = arr[i].hechizo
      const uso = arr[i].uso
      str = str + `
      
         <div class="hechizo">
            <p>${hechizo}</p>
            <p id="texto">${uso}</p>             
          </div>

      `
    }
    tarjetas.innerHTML = str;
  }