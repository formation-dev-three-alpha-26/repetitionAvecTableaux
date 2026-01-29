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

function minimum(tableau) {
  var min = tableau[0];

  for (var i = 1; i < tableau.length; i++) {
    if (tableau[i] < min) {
      min = tableau[i];
    }
  }

  return min;
}

function maximum(tableau) {
  var max = tableau[0];

  for (var i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
      max = tableau[i];
    }
  }

  return max;
}

// ["hi", "cat", "hello"]

function chaineLaPlusCourte(tableau) {
  var min = tableau[0].length;

  for (var i = 1; i < tableau.length; i++) {
    if (tableau[i].length < min) {
      min = tableau[i].length;
    }
  }

  return min;
}

function chaineLaPlusLongue(tableau) {
  var max = tableau[0].length;

  for (var i = 1; i < tableau.length; i++) {
    if (tableau[i].length > max) {
      max = tableau[i].length;
    }
  }

  return max;
}

function plusCourtePlusLongue(tableau) {
  var newtable = [];
  var min = tableau[0];
  var max = tableau[0];

  for (var i = 1; i < tableau.length; i++) {
    if (tableau[i].length < min.length) {
      min = tableau[i];
    }

    if (tableau[i].length > max.length) {
      max = tableau[i];
    }
  }

  newtable.push(min, max);

  return newtable;
}

function minimumMaximum(tableau) {
  var newTable = [];
  newTable.push(minimum(tableau), maximum(tableau));

  return newTable;
}

function multiplierPar(tableau, nombre) {
  var newTable = [];

  for (var i = 0; i < tableau.length; i++) {
    newTable.push(tableau[i] * nombre);
  }

  return newTable;
}

function multiplierParIndex(tableau) {
  var newTable = [];

  for (var i = 0; i < tableau.length; i++) {
    newTable.push(tableau[i] * i);
  }

  return newTable;
}

function longueurs(tableau) {
  var newTable = [];

  for (var i = 0; i < tableau.length; i++) {
    newTable.push(tableau[i].length);
  }

  return newTable;
}

function totalCaracteres(tableau) {
  var somme = 0;

  for (var i = 0; i < tableau.length; i++) {
    somme += tableau[i].length;
  }

  return somme;
}

function filtrerMotsPairs(tableau) {
  var newTable = [];

  for (var i = 0; i < tableau.length; i++) {
    if (tableau[i].length % 2 === 0) {
      newTable.push(tableau[i]);
    }
  }
  return newTable;
}

function supprimerDernierDeChaque(tableau) {
  for (var i = 0; i < tableau.length; i++) {
    tableau[i].pop();
  }

  return tableau;
}

function ajouterDernierAChaque(tableau, element) {
  for (var i = 0; i < tableau.length; i++) {
    tableau[i].push(element);
  }

  return tableau;
}

function sommeTableaux(tableau) {
  var somme = 0;
  for (var i = 0; i < tableau.length; i++) {
    for (var x = 0; x < tableau[i].length; x++) {
      somme += tableau[i][x];
    }
  }
  return somme;
}

function multiplierParPlusPetit(tableau) {
  var min = minimum(tableau);
  var newTable = [];

  for (var i = 0; i < tableau.length; i++) {
    newTable.push(tableau[i] * min);
  }
  return newTable;
}


