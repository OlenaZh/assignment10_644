//STEP 1
/*function alphabetOrder(str) {
    return str.split ('').sort().join('')
}
console.log(alphabetOrder('webmaster') )*/

//STEP 2
/*function capitalize (sentence) {
  let element;
  let strArray;
  let cappedStrArray = []; 
  let cappedString;
  strArray = sentence.split(' ');
  for (element in strArray) {
      if (strArray.hasOwnProperty(element)) {
          cappedStrArray.push(strArray[element].replace(strArray[element].charAt(0), strArray[element].charAt(0).toUpperCase()))
      }
  }
cappedString = cappedStrArray.join(' ')
return cappedString;
}
console.log(capitalize('the quick brown fox jumped over the lazy dog'))*/

//STEP 3
/*function vowelCount(str1) {
    var vowelList = 'aeiouAEIOU';
    var vcount = 0;
    
    for(var i = 0; i < str1.length ; i++)
    {
      if (vowelList.indexOf(str1[i]) !== -1)
      {
        vcount += 1;
      }
    
    }
    return vcount;
  }
  console.log(vowelCount("The quick brown fox"));*/

  //Or STEP 3.1
  /*let vow = function (str) {
      let matches;
      let count;
      matches = str.match(/[aeiou]/gi);
      count = matches ? matches.length : 0;
      return str + ' contains ' + count + ' vowel (s).';
  }
  console.log(vow('The quick brown fox jumped over the lazy dog'));*/
//STEP 4
/*function generateId(id) {
    return Math.random().toString(36).substr(2, id)
}
console.log(generateId(8))*/

//STEP 5
/*function LongestCountryName(countryName) {
    return countryName.reduce(function(lname, country) {
      return lname.length > country.length ? lname : country;
    }, 
  "");
  }
  console.log(LongestCountryName(["Australia", "Germany", "United States of America"]));*/

  //OR STEP 5.1
  /*function getLongestName(countries) {
     let i, longestCountry = 0, indexOfLongest = 0;
     for (i = 0; i < countries.length; i += 1) {
         if (countries[i].length > longestCountry) {
             longestCountry = countries[i].length;
             indexOfLongest = i;
         }
    }
     return console.log(countries[indexOfLongest]);
 }
 getLongestName(['Australia', 'Germany', 'United States of America']);*/
  
