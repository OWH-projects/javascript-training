// function to check for a vowel: http://stackoverflow.com/a/5493740
function vowelTest(s) {
  return (/^[aeiou]$/i).test(s);
}

// function to slugify
function slugify(x) {
    return x.toLowerCase().replace(" ","-");
}

// loop over the data to populate the select menu
for (i=0;i<anml.length;i++) {
    var option = document.createElement("option");
    option.text = anml[i].animal;
    option.value = slugify(anml[i].animal);
    var select = document.getElementById("select_animal");
    select.appendChild(option);
}

// function to change the content when an option is selected
function getAnimal(x) {
    var d = document.getElementById('display');
    if ( x === '' )
        { d.innerHTML = '' }
    else {
    for (i=0;i<anml.length;i++) {
        if (x === slugify(anml[i].animal)) {
            var a = '';
            var vowel = vowelTest(anml[i].collective.slice(0,1));
            if (vowel === true) {
                a = "an"
            }
            else {
                a = "a"
            }
            d.innerHTML = a + " " + anml[i].collective + " of ";
        }
    }
  }
} 