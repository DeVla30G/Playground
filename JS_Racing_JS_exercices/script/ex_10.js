window.onload = function(){

    let searchText = document.getElementsByTagName("input")[0];
    let searchBtn = document.getElementsByTagName("button")[0];
   

        searchBtn.onclick = () => {

            let valueR = searchText.value;

            fetch(`https://apicarto.ign.fr/api/codes-postaux/communes/${valueR}`)
                .then(response => { console.log(response);  return response.json();  })
                .then(data => { console.table(data)
                     let result = document.getElementsByTagName("div")[2];

                        for (let i=0; i< data.length; i++){

                        let commune = data[i].nomCommune;
                        let lib = data[i].libelleAcheminement;
                   
                 result.textContent = commune + " - " + lib;}
                
                });
                
                
            }         
                    
}