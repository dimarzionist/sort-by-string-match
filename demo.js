var terms = ['Burn', 'Banana', 'Fall', 'Other'],
    list = ['Falls', 'Falling', 'Some Fall from Banana', 'Fall From the roof', 'Burn', 'Burned', 'Other'];

var assignScore = function(term, test) {
  var testLength = test.length, matchedLength = term.length,
      lTerm = term.toLowerCase(), lTest = test.toLowerCase(), match = false;
  
  do{
    var index = lTest.indexOf(lTerm);
    if (index !== -1) {
      match = true;
    } else {
      lTerm = lTerm.substring(0, lTerm.length-1);
      matchedLength = lTerm.length;
    }    
  } while (!match && matchedLength > 0);
  
  
  return matchedLength/testLength;  
};

_.each(terms, function(term){
  var sortedList = _.sortBy(list, function(item){
    return -assignScore(term, item);
  });

  console.log(term + ': \r\n        ' + sortedList.join(','));
});
