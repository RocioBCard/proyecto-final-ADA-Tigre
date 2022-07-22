const intro = document.getElementById('intro');

const repartoInfo = document.getElementById('reparto');

const peliculasDVD = document.getElementById('peliculas');

const mensajeUno = `
    <p>A comienzos del 2001, Warner Bros. Pictures comenzó a realizar las películas de los libros. Estas películas llegaron a ser muy populares, y en menos de una década los films lograron la mayor recaudación en la historia, superando así a la franquicia de James Bond. al principio la autora dudaba acerca de otorgar los derechos de las películas pero después acepto siempre y cuando las películas fueran fieles a libros y el reparto fuera británico (solo hubo pequeñas excepciones).</p>
    <br> 
    <ul>Hasta hoy en día, se han estrenado todas las ocho películas:
        <li><a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_la_piedra_filosofal_(pel%C3%ADcula)" target="_blank">Harry Potter y la Piedra Filosofal</a>  de <a href="https://harrypotter.fandom.com/es/wiki/Chris_Columbus" target="_blank">Chris Colombus</a>. (2001)</li>
        <li><a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_la_c%C3%A1mara_secreta_(pel%C3%ADcula)" target="_blank">Harry Potter y la Cámara Secreta</a> de <a href="https://harrypotter.fandom.com/es/wiki/Chris_Columbus" target="_blank">Chris Colombus</a>. (2002)</li>
        <li><a href= "https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_el_prisionero_de_Azkaban_(pel%C3%ADcula)" target="_blank">Harry Potter y el Prisionero de Azkaban</a> de <a href="https://harrypotter.fandom.com/es/wiki/Alfonso_Cuar%C3%B3n" target="_blank">Alfonso Cuarón</a>. (2004)</li>
        <li><a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_el_c%C3%A1liz_de_fuego_(pel%C3%ADcula)" target="_blank">Harry Potter y el Cáliz de Fuego</a> de<a href="https://harrypotter.fandom.com/es/wiki/Mike_Newell" target="_blank">Mike Newell</a> . (2005)</li>
        <li><a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_la_Orden_del_F%C3%A9nix_(pel%C3%ADcula)" target="_blank">Harry Potter y la Orden del Fénix</a> de <a href="https://harrypotter.fandom.com/es/wiki/David_Yates" target="_blank">David Yates</a>. (2007)</li>
        <li><a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_el_misterio_del_pr%C3%ADncipe_(pel%C3%ADcula)" target="_blank">Harry Potter y el Misterio del Príncipe</a> de <a href="https://harrypotter.fandom.com/es/wiki/David_Yates" target="_blank">David Yates</a>. (2009)</li>
        <li><a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_las_Reliquias_de_la_Muerte:_Parte_1" target="_blank">Harry Potter y las Reliquias de la Muerte: Parte 1</a> de <a href="https://harrypotter.fandom.com/es/wiki/David_Yates" target="_blank">David Yates</a>. (2010)</li>
        <li><a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_las_Reliquias_de_la_Muerte:_Parte_2" target="_blank">Harry Potter y las Reliquias de la Muerte: Parte 2</a> de <a href="https://harrypotter.fandom.com/es/wiki/David_Yates" target="_blank">David Yates</a> (2011)</li>
    </ul> 
  `
intro.innerHTML = mensajeUno; 

const mensajeDos = `
    <h2>Reparto</h2> 
    <ul>Solo doce personajes participaron en todas las películas:
        <br>
         <li>Harry Potter, interpretado por <a href="https://https://harrypotter.fandom.com/es/wiki/Daniel_Radcliffe" target="_blank">Daniel Radcliffe</a> , y los <a href="https://harrypotter.fandom.com/es/wiki/Trillizos_Saunders" target="_blank">Trillizos Saunders</a>  como la versión bebé de Harry.</li>
         <li>Ron Weasley, interpretado por <a href="https://harrypotter.fandom.com/es/wiki/Rupert_Grint" target="_blank">Rupert Grint</a>.</li>
         <li>Hermione Granger, interpretada por <a href="https://harrypotter.fandom.com/es/wiki/Emma_Watson" target="_blank">Emma Watson</a>.</li>
         <li>Albus Dumbledore, interpretado por <a href="https://harrypotter.fandom.com/es/wiki/Richard_Harris" target="_blank">Richard Harris</a> es las primeras dos películas y luego del fallecimiento de este, fue reemplazado por <a href="https://harrypotter.fandom.com/es/wiki/Michael_Gambon" target="_blank">Michael Gambon</a> en las otras, también <a href="https://harrypotter.fandom.com/es/wiki/Toby_Regbo" target="_blank">Toby Regbo</a> interpretó a un Albus adolescente.</li>                
         <li>Rubeus Hagrid, interpretado por <a href="https://harrypotter.fandom.com/es/wiki/Robbie_Coltrane" target="_blank">Robbie Coltrane</a>, también <a href="https://harrypotter.fandom.com/es/wiki/Martin_Bayfield" target="_blank">Martin Bayfield</a> como Hagrid adolescente.</li>
         <li>Severus Snape, interpretado por <a href="https://harrypotter.fandom.com/es/wiki/Alan_Rickman" target="_blank">Alan Rickman</a>, <a href="https://harrypotter.fandom.com/es/wiki/Alec_Hopkins" target="_blank">Alec Hopkins</a> como adolescente y Ben Clarke como un niño.</li>
         <li>Ginny Weasley, interpretada por <a href="https://harrypotter.fandom.com/es/wiki/Bonnie_Wright" target="_blank">Bonnie Wright</a>.</li>
         <li>Neville Longbottom, interpretado por <a href="https://harrypotter.fandom.com/es/wiki/Matthew_Lewis" target="_blank">Matthew Lewis</a>.</li>
         <li>Draco Malfoy, interpretado por <a href="https://harrypotter.fandom.com/es/wiki/Tom_Felton" target="_blank">Tom Felton</a>.</li>
         <li>Fred Weasley, interpretado por <a href="https://harrypotter.fandom.com/es/wiki/James_Phelps" target="_blank">James Phelps</a>.</li>
         <li>George Weasley, interpretado por <a href="https://harrypotter.fandom.com/es/wiki/Oliver_Phelps" target="_blank">Oliver Phelps</a>.</li>
         <li>Seamus Finnigan, interpretado por <a href="https://harrypotter.fandom.com/es/wiki/Devon_Murray" target="_blank">Devon Murray</a>.</li>
    </ul> 
  `
repartoInfo.innerHTML = mensajeDos; 

const mensajeTres = `
<div class="tarjetas">
<h3> <a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_la_piedra_filosofal_(pel%C3%ADcula) ">Harry Potter y la Piedra Filosofal </a> </h3>
<figure>
    <img src="https://i.pinimg.com/originals/01/9c/21/019c2145491cefd3320c61dd31d02e88.jpg" alt="Tapa del DVD" width="450px">
</figure>
</div>       
<div class="tarjetas">
<h3> <a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_la_c%C3%A1mara_secreta_(pel%C3%ADcula)">Harry Potter y la Cámara Secreta</a> </h3>
<figure>
    <img src="https://i.pinimg.com/originals/b4/d4/d0/b4d4d02a8b1660017b37ef9b24f13b24.jpg" alt="Tapa del DVD" width="450px">
</figure>
</div>       
<div class="tarjetas">
<h3> <a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_el_prisionero_de_Azkaban_(pel%C3%ADcula)">Harry Potter y el Prisionero de Azkaban</a></h3>
<figure>
    <img src="https://pics.filmaffinity.com/Harry_Potter_y_el_prisionero_de_Azkaban-412613466-large.jpg" alt="Tapa del DVD" width="450px">
</figure>
</div>       
<div class="tarjetas">
<h3> <a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_el_c%C3%A1liz_de_fuego_(pel%C3%ADcula)">Harry Potter y el Cáliz de Fuego</a></h3>
<figure>
    <img src="https://cloud10.todocoleccion.online/cine-peliculas-dvd/tc/2017/05/25/17/87432244.jpg" alt="Tapa del DVD" width="450px">
</figure>
</div>       
<div class="tarjetas">
<h3> <a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_la_Orden_del_F%C3%A9nix_(pel%C3%ADcula)">Harry Potter y la Órden del Fénix</a></h3>
<figure>
    <img src="https://pics.filmaffinity.com/Harry_Potter_y_la_orden_del_F_nix-861737530-large.jpg" alt="Tapa del DVD" width="450px">
</figure>
</div>       
<div class="tarjetas">
<h3> <a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_el_misterio_del_pr%C3%ADncipe_(pel%C3%ADcula)">Harry Potter y el Misterio del Príncipe</a></h3>
<figure>
    <img src="https://1.bp.blogspot.com/--rA933SkrK0/XYyYwvP1aeI/AAAAAAAAVTU/vXUSzL0bcnc_bwA0KH06dgp7pOzAWYSfwCEwYBhgL/s1600/Harry%2BPotter%2B2009%2B2.jpg" alt="Tapa del DVD" width="450px">
</figure>
</div>     
<div class="tarjetas">
<h3> <a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_las_Reliquias_de_la_Muerte:_Parte_1">Harry Potter y las Reliquias de la Muerte: Parte 1</a></h3>
<figure>
    <img src="https://http2.mlstatic.com/D_NQ_NP_944359-MLA49152065199_022022-O.jpg"  alt="Tapa del DVD" width="450px">
</figure>
</div>  
<div class="tarjetas">
<h3> <a href="https://harrypotter.fandom.com/es/wiki/Harry_Potter_y_las_Reliquias_de_la_Muerte:_Parte_2">Harry Potter y las Reliquias de la Muerte: Parte 2</a></h3>
<figure>
    <img src="https://pics.filmaffinity.com/harry_potter_and_the_deathly_hallows_part_ii-937338057-large.jpg"  alt="Tapa del DVD" width="450px">
</figure>
</div>  
`
peliculasDVD.innerHTML = mensajeTres;