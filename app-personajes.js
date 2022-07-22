
const seleccionar = document.getElementsByClassName('seleccionar'); 

for( let i = 0; i < seleccionar.length; i++) {
  seleccionar[i].addEventListener('click', (event) => {
  if(event.target.id === "1"){
    const personajes = document.getElementById('estudiante-libro');
    const url = 'http://hp-api.herokuapp.com/api/characters/students';   
     fetch(url)
         .then((resp) => resp.json())
         .then((data) => printData(data))
         .catch ((error) => console.log(error))
         const printData = (arr) => {
            let str = '';
            for(let i = 0; i < arr.length; i++){
    
              const name = arr[i].name
              const alternate_names = arr[i].alternate_names
              const species = arr[i].species
              const gender = arr[i].gender
              const house = arr[i].house
              const dateOfBirth = arr[i].dateOfBirth
              const  ancestry = arr[i].ancestry
              const  wood = arr[i].wand.wood
              const  core = arr[i].wand.core
              const  length = arr[i].wand.length
              const  patronus = arr[i].patronus
              const  actor = arr[i].actor
              const  alternate_actors = arr[i].alternate_actors
              const  alive = arr[i].alive
              const image = arr[i].image
              str = str + `
    
                <div class="personaje agregar">
                <figure class="figure-est-book"><img src="${image}" alt="${name}" width="200px"></figure>
                <div class="info-estudiante-libro ">
               <p>~Name: ${name}</p>
               <p>~Alternate Names: ${alternate_names}</p>
               <p>~Species: ${species}</p>
               <p>~Gender: ${gender}</p>
               <p>~House: ${house}</p>
               <p>~Date of Birth: ${dateOfBirth}</p>
               <p>~Ancestry: ${ancestry}</p>
               <p>~Wand=</p>
               <p>·Wood: ${wood}</p>
               <p>·Core: ${core}</p>
               <p>·Length: ${length}</p>               
               <p>~Patronus: ${patronus}</p>
               <p>~Actor: ${actor}</p>
               <p>~Alternate Actors: ${alternate_actors}</p>
               <p>~Alive: ${alive}</p>
              </div>
              </div>
    
          `
            
            }
            personajes.innerHTML = str;

          } 

    
  } else if(event.target.id === "2"){
    const gryffindor = document.getElementById('gryffindor');
    const url2 = 'http://hp-api.herokuapp.com/api/characters/house/gryffindor';
    fetch(url2)
      .then((resp) => resp.json())
      .then((data) => printData2(data))
      .catch ((error) => console.log(error))
     const printData2 = (arr) => {
  let str = '';
  
  for(let i = 0; i < arr.length; i++){
    const name = arr[i].name
    const alternate_names = arr[i].alternate_names
    const species = arr[i].species
    const gender = arr[i].gender
    const dateOfBirth = arr[i].dateOfBirth
    const  ancestry = arr[i].ancestry
    const  wood = arr[i].wand.wood
    const core = arr[i].wand.core
    const length = arr[i].wand.length
    const  patronus = arr[i].patronus
    const  actor = arr[i].actor
    const  alternate_actors = arr[i].alternate_actors
    const  alive = arr[i].alive
    const image = arr[i].image
    str = str + `
    <div class="personaje agregar gryffindor">
    <figure class="figure-est-book"><img src="${image}" alt="${name}" width="230px"></figure>
    <div class="info-estudiante-libro">
     <p>~Name: ${name}</p>
     <p>~Alternate Names: ${alternate_names}</p>
     <p>~Species: ${species}</p>
     <p>~Gender: ${gender}</p>
     <p>~Date of Birth: ${dateOfBirth}</p>
     <p>~Ancestry: ${ancestry}</p>
     <p>~Wand= </p>
     <p>·Wood: ${wood}</p>
     <p>·Core: ${core}</p>
     <p>·Length: ${length}</p>
     <p>~Patronus: ${patronus}</p>
     <p>~Actor: ${actor}</p>
     <p>~ALternate Actors: ${alternate_actors}</p>
     <p>~Alive: ${alive}</p>
    </div>
    </div>

`
   
   
  }
  gryffindor.innerHTML = str;
      };

    const hufflepuff = document.getElementById('hufflepuff');
    const url3= 'https://hp-api.herokuapp.com/api/characters/house/hufflepuff';
      fetch(url3)
      .then((resp) => resp.json())
      .then((data) => printData3(data))
      .catch ((error) => console.log(error))
      const printData3 = (arr) => {
  let str = '';
  for(let i = 0; i < arr.length; i++){
    const name = arr[i].name
    const alternate_names = arr[i].alternate_names
    const species = arr[i].species
    const gender = arr[i].gender
    const dateOfBirth = arr[i].dateOfBirth
    const  ancestry = arr[i].ancestry
    const  wood = arr[i].wand.wood
    const core = arr[i].wand.core
    const length = arr[i].wand.length
    const  patronus = arr[i].patronus
    const  actor = arr[i].actor
    const  alternate_actors = arr[i].alternate_actors
    const  alive = arr[i].alive
    const image = arr[i].image
    str = str + `
    <div class="personaje agregar hufflepuff ">
    <figure class="figure-est-book"><img src="${image}" alt="${name}" width="230px"></figure>
    <div class="info-estudiante-libro">
    <p>~Name: ${name}</p>
    <p>~Alternate Names: ${alternate_names}</p>
    <p>~Species: ${species}</p>
    <p>~Gender: ${gender}</p>
    <p>~Date of Birth: ${dateOfBirth}</p>
    <p>~Ancestry: ${ancestry}</p>
    <p>~Wand= </p>
    <p>·Wood: ${wood}</p>
    <p>·Core: ${core}</p>
    <p>·Length: ${length}</p>
    <p>~Patronus: ${patronus}</p>
    <p>~Actor: ${actor}</p>
    <p>~ALternate Actors: ${alternate_actors}</p>
    <p>~Alive: ${alive}</p>
    </div>
    </div>

`
   
   
  }
  hufflepuff.innerHTML = str;
     };
    const ravenclaw = document.getElementById('ravenclaw');
    const url4 = 'https://hp-api.herokuapp.com/api/characters/house/ravenclaw';
    fetch(url4)
     .then((resp) => resp.json())
     .then((data) => printData4(data))
     .catch ((error) => console.log(error))
     const printData4 = (arr) => {
  let str = '';
  for(let i = 0; i < arr.length; i++){
    const name = arr[i].name
    const alternate_names = arr[i].alternate_names
    const species = arr[i].species
    const gender = arr[i].gender
    const dateOfBirth = arr[i].dateOfBirth
    const  ancestry = arr[i].ancestry
    const  wood = arr[i].wand.wood
    const core = arr[i].wand.core
    const length = arr[i].wand.length
    const  patronus = arr[i].patronus
    const  actor = arr[i].actor
    const  alternate_actors = arr[i].alternate_actors
    const  alive = arr[i].alive
    const image = arr[i].image
    str = str + `
    <div class="personaje agregar ravenclaw">
    <figure class="figure-est-book"><img src="${image}" alt="${name}" width="230px"></figure>
    <div class="info-estudiante-libro">
    <p>~Name: ${name}</p>
    <p>~Alternate Names: ${alternate_names}</p>
    <p>~Species: ${species}</p>
    <p>~Gender: ${gender}</p>
    <p>~Date of Birth: ${dateOfBirth}</p>
    <p>~Ancestry: ${ancestry}</p>
    <p>~Wand= </p>
    <p>·Wood: ${wood}</p>
    <p>·Core: ${core}</p>
    <p>·Length: ${length}</p>
    <p>~Patronus: ${patronus}</p>
    <p>~Actor: ${actor}</p>
    <p>~ALternate Actors: ${alternate_actors}</p>
    <p>~Alive: ${alive}</p>
    </div>
    </div>

`
   
   
  }
  ravenclaw.innerHTML = str;
     };
    const slytherin = document.getElementById('slytherin');
    const url5 = 'https://hp-api.herokuapp.com/api/characters/house/slytherin';
    fetch(url5)
       .then((resp) => resp.json())
       .then((data) => printData5(data))
       .catch ((error) => console.log(error))
      const printData5 = (arr) => {
  let str = '';
  for(let i = 0; i < arr.length; i++){
    const name = arr[i].name
    const alternate_names = arr[i].alternate_names
    const species = arr[i].species
    const gender = arr[i].gender
    const dateOfBirth = arr[i].dateOfBirth
    const  ancestry = arr[i].ancestry
    const  wood = arr[i].wand.wood
    const core = arr[i].wand.core
    const length = arr[i].wand.length
    const  patronus = arr[i].patronus
    const  actor = arr[i].actor
    const  alternate_actors = arr[i].alternate_actors
    const  alive = arr[i].alive
    const image = arr[i].image
    str = str + `
    <div class="personaje agregar slytherin">
    <figure class="figure-est-book"><img src="${image}" alt="${name}" width="230px"></figure>
    <div class="info-estudiante-libro">
    <p>~Name: ${name}</p>
    <p>~Alternate Names: ${alternate_names}</p>
    <p>~Species: ${species}</p>
    <p>~Gender: ${gender}</p>
    <p>~Date of Birth: ${dateOfBirth}</p>
    <p>~Ancestry: ${ancestry}</p>
    <p>~Wand= </p>
    <p>·Wood: ${wood}</p>
    <p>·Core: ${core}</p>
    <p>·Length: ${length}</p>
    <p>~Patronus: ${patronus}</p>
    <p>~Actor: ${actor}</p>
    <p>~ALternate Actors: ${alternate_actors}</p>
    <p>~Alive: ${alive}</p>
    </div>
    </div>

`
   
   
  }
  slytherin.innerHTML = str;
    }
  } else if(event.target.id === "3"){
    const personajesLibroTodos = document.getElementById('todos-los-personajes');
    const url6 = 'http://hp-api.herokuapp.com/api/characters';

    fetch(url6)
       .then((resp) => resp.json())
       .then((data) => printData6(data))
       .catch ((error) => console.log(error))
       const printData6 = (arr) => {
  let str = '';
  for(let i = 0; i < arr.length; i++){
    const name = arr[i].name
    const alternate_names = arr[i].alternate_names
    const species = arr[i].species
    const gender = arr[i].gender
    const house = arr[i].house
    const dateOfBirth = arr[i].dateOfBirth
    const  ancestry = arr[i].ancestry
    const  wood = arr[i].wand.wood
    const core = arr[i].wand.core
    const length = arr[i].wand.length
    const  patronus = arr[i].patronus
    const  actor = arr[i].actor
    const  alternate_actors = arr[i].alternate_actors
    const  alive = arr[i].alive
    const image = arr[i].image
    str = str + `
    <div class="personaje agregar">
    <figure class="figure-est-book"><img src="${image}" alt="${name}" width="230px"></figure>
    <div class="info-estudiante-libro">
    <p>~Name: ${name}</p>
    <p>~Alternate Names: ${alternate_names}</p>
    <p>~Species: ${species}</p>
    <p>~Gender: ${gender}</p>
    <p>~House: ${house}</p>
    <p>~Date of Birth: ${dateOfBirth}</p>
    <p>~Ancestry: ${ancestry}</p>
    <p>~Wand=</p>
    <p>·Wood: ${wood}</p>
    <p>·Core: ${core}</p>
    <p>·Length: ${length}</p>               
    <p>~Patronus: ${patronus}</p>
    <p>~Actor: ${actor}</p>
    <p>~Alternate Actors: ${alternate_actors}</p>
    <p>~Alive: ${alive}</p>
    </div>
    </div>

`
   
   
  }
  personajesLibroTodos.innerHTML = str;
    }

  }else if(event.target.id === "4"){
    const personajesPersonalDeHogwartsLibro = document.getElementById('personajes-personal-de-hogwarts-libro');
    const url7 = 'http://hp-api.herokuapp.com/api/characters/staff';
    fetch(url7)
      .then((resp) => resp.json())
      .then((data) => printData7(data))
      .catch ((error) => console.log(error))
      const printData7 = (arr) => {
  let str = '';
  for(let i = 0; i < arr.length; i++){
    const name = arr[i].name
    const alternate_names = arr[i].alternate_names
    const species = arr[i].species
    const gender = arr[i].gender
    const house = arr[i].house
    const dateOfBirth = arr[i].dateOfBirth
    const  ancestry = arr[i].ancestry
    const  wood = arr[i].wand.wood
    const core = arr[i].wand.core
    const length = arr[i].wand.length
    const  patronus = arr[i].patronus
    const  actor = arr[i].actor
    const  alternate_actors = arr[i].alternate_actors
    const  alive = arr[i].alive
    const image = arr[i].image
    str = str + `
    <div class="personaje agregar">
    <figure class="figure-est-book"><img src="${image}" alt="${name}" width="230px"></figure>
    <div class="info-estudiante-libro">
    <p>~Name: ${name}</p>
    <p>~Alternate Names: ${alternate_names}</p>
    <p>~Species: ${species}</p>
    <p>~Gender: ${gender}</p>
    <p>~House: ${house}</p>
    <p>~Date of Birth: ${dateOfBirth}</p>
    <p>~Ancestry: ${ancestry}</p>
    <p>~Wand=</p>
    <p>·Wood: ${wood}</p>
    <p>·Core: ${core}</p>
    <p>·Length: ${length}</p>               
    <p>~Patronus: ${patronus}</p>
    <p>~Actor: ${actor}</p>
    <p>~Alternate Actors: ${alternate_actors}</p>
    <p>~Alive: ${alive}</p>
    </div>
    </div>

`
   
   
  }
  personajesPersonalDeHogwartsLibro.innerHTML = str;
      }

  }else {alert("Porfavor, seleciones una de las opciones disponibles")}})
}