function tableauFor(tableau) {
  for (var i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
  }
}

function tableauWhile(tableau) {
  var i = 0;

  while (i < tableau.length) {
    console.log(tableau[i]);

    i++;
  }
}

function somme(tableau) {
  var some = 0;

  for (var i = 0; i < tableau.length; i++) {
    some += tableau[i];
  }
  return some;
}

function sommeUnSurDeux(tableau) {
  var some = 0;

  for (var i = 0; i < tableau.length; i = i + 2) {
    some += tableau[i];
  }
  return some;
}

function sommeDepuisIndex(tableau, index) {
  var somme = 0;

  for (var i = index; i < tableau.length; i++) {
    somme += tableau[i];
  }

  return somme;
}

function sommeJusquaIndex(tableau, index) {
  var somme = 0;
  for (var i = 0; i <= index; i++) {
    somme += tableau[i];
  }

  return somme;
}

// [2, 3, 7, 20];

function soustractionInverse(tableau) {
  var result = tableau[tableau.length - 1];

  for (var i = tableau.length - 2; i >= 0; i--) {
    result = result - tableau[i];
  }

  return result;
}

function produit(tableau) {
  var result = 1;

  for (var i = 0; i < tableau.length; i++) {
    result *= tableau[i];
  }

  return result;
}

function moyenne(tableau) {
  var result = somme(tableau);

  return result / tableau.length;
}

// function moyenne(tableau) {

//   var some = 0;

//   for (var i = 0; i < tableau.length; i++) {
//     some += tableau[i];
//   }

// return some / tableau.length

// }

function carre(tableau) {
  var newt = [];

  for (var i = 0; i < tableau.length; i++) {
    newt.push(tableau[i] ** 2);
  }

  return newt;
}


function estTableau(valeur) {

return Array.isArray(valeur )

}


