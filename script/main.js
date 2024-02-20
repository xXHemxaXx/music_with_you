fetch(`https://deezerdevs-deezer.p.rapidapi.com/infos?rapidapi-key=19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
})


//https://connect.deezer.com/oauth/auth.php?app_id=39355571&redirect_uri=https://www.deezer.com/fr/