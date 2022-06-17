window.onload = function(){

    fetch('https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?limit=25&offset=0')

    .then(Response =>Response.json())
    .then((data) => {
        let result = document.getElementsByTagName('div')[2];

        for (let i=0; i<=24; i++){
            let nom_commune = data.records[i].record.fields.nom_commune;
            let nom_etablissement = data.records[i].record.fields.nom_etablissement;
            let mail = data.records[i].record.fields.mail;
            let N = i;

            result.innerHTML += N + " - "+ nom_commune + " - " + nom_etablissement + " - " + mail + "<br>";
            
        }



    });
}