var isUnique = function(str) {
	var hashmap = new Map();

	for (var i = 0; i < str.length; i++) {
		var c = str.charAt(i);
		if (hashmap.has(c)) {
			hashmap.set(c, hashmap.get(c) + 1);
			return false;
		}
		hashmap.set(c, 1);
	}
	return true;
};

console.log(isUnique('abcd10jk'));
console.log(isUnique('hutg9mnd!nk9'));

var CheckPerm = function(str1, str2) {
	if (str1.length != str2.length) return false;

	return (
		str1
			.split('')
			.sort()
			.join() ==
		str2
			.split('')
			.sort()
			.join()
	);
};

console.log(CheckPerm('dog', 'god'));
console.log(CheckPerm('doog', 'gd'));

var URLify = function(str,len) {
  var arr = [...str]
  var spaceCount =0
  for (var i = 0; i < len; i++)
  {
    if(arr[i] == ' ')
      spaceCount++;
  }
  var index = len + spaceCount * 2;
  for(var x= len -1; x>=0 ;x--)
  {
   
     if(arr[x] == ' ')
     {
       arr[index-1] = '0';
       arr[index-2] = '2';
       arr[index-3] = '%';
       index = index -3;
     }
     else
     {
       arr[index-1] = arr[x];
       index--;
     }
  }
  return arr.join("");
  
}

console.log(URLify("Mr John Smith    ", 13));

var isPalindromePermutation = function(str) {
 var hashmap = new Map();
 var addCounts = 0;
 str = str.split(' ').join('').toLowerCase();
  
 for(var i = 0; i <= str.length -1 ; i++)
 {
   var c = str[i]
    if(hashmap.has(c))
    {
        hashmap.set(c,hashmap.get(c) + 1);
    }
    else{
         hashmap.set(c,1);
    }
    
    if(hashmap.get(c) % 2 == 1)
    {
      addCounts++;
    }else
    {
      addCounts--;
    }
 }
 return addCounts <= 1;
}

console.log(isPalindromePermutation("Tact Coa"));

//insert a character
//remove a character
//replace a character

var OneAway = function(s1,s2) {
  if(s1.length === 0 || s2.length === 0)
  {
    return false;
  }

  var longString = s1.length > s2.length ? s1 : s2;
  var shortString = s1.length <= s2.length ? s1 : s2;
  
  var lindex = 0; 
  var sindex = 0;
  var edits  = 0;
  
  while(lindex < longString.length || sindex < shortString.length)
  {
    if(longString[lindex] !==  shortString[sindex])
    {
      edits++;
      if (edits > 1)
        return false;
      if(longString[lindex + 1] ===  shortString[sindex])
        lindex++;
    }
    lindex++;
    sindex++;
  } 
 
  return true;
}


console.log(OneAway("pale", "ple"));
console.log(OneAway("pales", "pale"));
console.log(OneAway("pale", "bale"));
console.log(OneAway("pale", "bake"));
console.log(OneAway("pale", ""));
console.log(OneAway("", "bake"));

