let myBtns = document.querySelector(".buttons")




// fetch(`https://deezerdevs-deezer.p.rapidapi.com/infos?rapidapi-key=19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`) fonctionne pour info en général
//ici on teste avec info - ça marche
// aussi testé avec ma playlist plaisir coupable - playlist/8248370362 - ça marche



function sortMusic(music){  //attribute correspondra au data-attribute en argument qui sera dans le eventListener

  fetch(`https://deezerdevs-deezer.p.rapidapi.com/${music}?rapidapi-key=6e9b5b7007msh37e933091d37056p1da7e9jsnb8a274dd7b51&redirect_uri=deezerdevs-deezer.p.rapidapi.com`)
  .then(response => response.json())
  .then(data => {
    console.log(data);





  })
  
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })

}

myBtns.addEventListener('click', function(e){
  if(e.target.classList.contains("btn")){  //pour vérifier si on est bien sur un bouton avec la classList btn
  sortMusic(e.target.getAttribute("data-music"))

  }
})

//scroll au menu
let navbar = document.querySelector(".navbar")
let lastScrollay = 0

function handleScroll(){
  if (window.innerWidth > 1000){
    let dejaScrollay = Math.max(window.scrollY, 0)
    if (dejaScrollay > lastScrollay){
      navbar.classList.add("slide")
      
    } else {
      navbar.classList.remove("slide")
    }
    lastScrollay = dejaScrollay
    
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);


//   window.addEventListener('scroll', function(){
//     if (window.innerWidth > 1000){
//       let dejaScrollay = window.scrollY
//       if (dejaScrollay > newScrollay){
//           navbar.classList.add("slide")
//       } else {
//           navbar.classList.remove("slide")
//       }
//       newScrollay = dejaScrollay  
//     }
//       l 
//   })

 





// fetch(`https://deezerdevs-deezer.p.rapidapi.com/infos?rapidapi-key=19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
    
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })