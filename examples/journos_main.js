var cocaine = '';

for ( i=0; i<journo.length; i++ ) {
    cocaine += '<h2>' + journo[i].name + '</h2>' + '<p>Section: ' + journo[i].section + '<br/>' + 'Favorite color: ' + journo[i].favorite_color + '</p>'
}

document.getElementById('display').innerHTML = cocaine;