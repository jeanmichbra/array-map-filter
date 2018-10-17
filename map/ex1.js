/* Array.prototype.map - Exercice 1

Ecrire une fonction getStringsLength qui reçoit comme un argument un tableau de chaînes.
En utilisant map, cette fonction doit renvoyer un tableau avec,
pour chaque chaîne CHAINE de longueur N en entrée, la chaîne "CHAINE contains N characters"
en sortie.

Exemple d'entrée:
  [
    'Chicken',
    'Bacon',
    'Tofu',
    'Mayonnaise'
  ]
En sortie: [
  'Chicken contains 7 characters',
  'Bacon contains 5 characters',
  'Tofu contains 4 characters',
  'Mayonnaise contains 10 characters'
]

 */
function getStringsLength (entries){

  // Creer un tableau de sortie : (lengthes)
  let lengthes = [];
  // Pour chaque (str) dans (entries)
  entries.map((str)=>{
    // Créer une variable (nbChar) contenant le nombre de caractères de (str)
    let nbChar = str.length;
    
    // Créer variable (tmp) qui contient (str)
    let tmp = str;
    
    // Concaténer à (tmp) la phrase " contains (nbChar) characters"
    tmp += " contains "+nbChar+" characters";
    
    //    Ajouter (tmp) à (lengthes) 
    lengthes.push(tmp)
    /*
    let regex = /X/;
    console.log(tmp.replace(regex, nbChar));
    */
  });
  // Retourner (lengthes)
  return(lengthes);
};
 
/*console.log(getStringsLength([
  'Chicken',
  'Bacon',
  'Tofu',
  'Mayonnaise'
]));*/


// Si besoin, tu peux toujours visualiser le résultat avec console.log,
// mais alors, il faut alors lancer l'exercice avec node map/ex1
// console.log(getStringsLength(['Cat', 'Lion', 'Tiger', 'Jaguar', 'Leopard']));

// Ne pas modifier l'export
module.exports = getStringsLength;
