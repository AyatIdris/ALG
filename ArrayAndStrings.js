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
