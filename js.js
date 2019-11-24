//=================Arrays===================
//https://edabit.com/cha*/llenge/wikfKaQm3zP7buRA4
function AddOdd(arr) {
	let index = 0;
	let element = arr[0];
	let result = true;
	arr.forEach((element,index) => {
		if (index % 2 !== element % 2) {
			result = false;
		}
	})
	return result;
} 
//==================================================
//https://edabit.com/challenge/SS23vniCZ6ssGwsQP
function arr(array) {
	if (array == null) {
		return [];
	}
	array.sort((a,b)=> a-b)
	return array;
}
//==================================================
/*https://edabit.com/challenge/rufYqKzTLvDefFmKa*/
let splitString = (num) => (num+"").split("").map(el => +el)

function splitString(num) {
	return (num+"").split("").map(el => +el)
}

function splitArray(arr) {
	return +arr.join("")
}
//======================================================
//https://edabit.com/challenge/Twbmxzd3JwkkqAWES
function omni(arr,value) {
	let count = 0;
	arr.forEach(element =>{
		if (element.indexOf(value) !== -1) {
			count++;
			}
	})
	return arr.length==count ? true : false;
}
//======================================================
//https://edabit.com/challenge/FtZGQEonGwyozeCna
function factor(arr) {
    for (let i = 0; i < arr.length-1; i++){
        if (arr[i+1] % arr[i] != 0) return false;
    }
    return true;
}
//====================LOOPS=============================
//https://edabit.com/challenge/rCmEy2AQYLbRGgKyL
function sum(array) {
	let sum = 0;
	array.forEach((element,index)=> {
	sum+=Math.abs(array[index]);
	})
	return sum;
}
//==============================================================
//https://edabit.com/challenge/Ju7AK9rAGjz86hjxo
function factorial(number) {
	if (number != 1) {
	return	number * factorial(number - 1) 
	} else {
		return 1;
	}
}
//==============================================================
//https://edabit.com/challenge/3EQGHyiYTNc9LPmhF
function vowel(string){
  let count = 0;
  let vowels = "aeiou";
  for(let index = 0; index < string.length; index++){
    if(vowels.indexOf(string[index].toLowerCase()) > -1){
      count++;
    } 
  }
  return count; 
}
//=================================================================
//https://edabit.com/challenge/kbFhwaDyrd79JrgeB
function smbl(symbol,string){
  let count = 0;
  for(let index = 0; index < string.length; index++){
    if(symbol.indexOf(string[index]) > -1){
      count++;
    } 
  }
  return count; 
}
//=================================================================
//https://edabit.com/challenge/PTvYKkvf7oytHmJFm
function swap(string) {
        return string.replace(/([a-z]+)|([A-Z]+)/g, 
        	function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
//=========================Conditions================================
//https://edabit.com/challenge/kLa2w7m4h849k8rmW
function sayhb() {
	let name = prompt("What is your name?", "Anton");
	let num = prompt("1 or 0", "1");
	let result;
	if (num == 1 ){
		num = "Hello";
	} else if (num == 0) {
		num = "Bye";
	}
	result = num + " " + name;
	return result;
}
//=================================================================
//https://edabit.com/challenge/at7jF9Y7SmPGyD92u
function isPalindrom (str) {
  let temp = str.toLowerCase().split('')
  temp = temp.map((val) => {
  	if (val !== ' ') 
  		return val;
  })
  temp = temp.join('')
  for (let i = 0; i < temp.length / 2; i++) {
    if (temp[i] !== temp[temp.length - i - 1]) 
    	return false;
  }
  return true;
}
//=================================================================
//https://edabit.com/challenge/xXJLZry3vYd4erPct
function posneg(arr) {

  let plus = 0;
  let minus = 0;
  
  if (arr == 0)
    return [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      minus += arr[i];
    } else {
      plus++;
    }
  }
	if (plus == 0 && minus == 0)
		return []
  		return [plus, minus];

}
//=================================================================
//https://edabit.com/challenge/FdsQBPLYBwrpYEbRn
function quadratic(a,b,c) {
	let d = (Math.pow(b,2) - 4 * a * c);
	let x1 = ((-1 * b + Math.sqrt(d))/(2 * a));
	let x2 = ((-1 * b - Math.sqrt(d))/(2 * a));
	let odds = (a * Math.pow(x1,2) + b * x1 + c);
	if (d < 0) {
		return "d < 0"
	} else {
	if (odds == 0) {
		return x1;
	} else {
		return x2;
	}
	}
}
//=================================================================
//https://edabit.com/challenge/2dcXsuTD68iRK5MiT
function switcharo(str) {
    if (str.length < 2) {
        return "Incompatible."
    } else if (typeof(str) != "string"){
        return "Incompatible."
    } else if (str[0] == str[str.length - 1]) {
        return "Two's a pair"
    } else {
        let arr = str.split('');
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
        return arr.join('');
    }
}
//=================================================================
//====================OBJECT==========================================
//https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
let toarray = {
	shrimp:15,
	tots:12
}
let result = Object.keys(toarray).map(key =>  [String(key), toarray[key]]);
console.log(result);
//=================================================================
//https://edabit.com/challenge/AP4hnF97anRc2mAZ6
function toarr(object){
    var keys = Object.keys(object),
        values = keys.map(function (key) {
            return object[key];
        });
    
    return [keys, values]; 
}
//=================================================================
//https://edabit.com/challenge/4aaBNPnFMc3bzR7JR
function object(obj) {
	let result = Object.keys(obj).map(key =>  [String(key), obj[key]]);
	console.log(result);
}
//=================================================================
//https://edabit.com/challenge/b7dXbWEhbr3bXCk7i
let student = [
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }

]

function getStudentTopNotes(array) {
	let maxNotes = [];
	array.forEach(el => {
		maxNotes.push(Math.max(...el.notes))
	})
	return maxNotes;
}
//=================================================================
//https://edabit.com/challenge/83sWemMhpG6pScXKp
let guest = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina",
	Anton: "Ukraine"
}

function greeting() {
	let name =  prompt("What is your name?", "Anton");
	if (guest[name]) {
		console.log (`Hi! I'm ${name}, and I'm from ${guest[name]}.`);
	} else {
		console.log ("Hi! I'm a guest.");
	}
}
//=================================================================
//==========================Classes=======================================
//https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ
class Circle {
	constructor (radius) {
		this.radius = radius;
	}
	getArea() {
		return Math.PI*Math.pow(this.radius,2);
	}
	getPerimetr() {
		return Math.PI*this.radius*2;
	}
}
let cirsy = new Circle(11);
cirsy.getArea();
//======================================================================
//https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn
class Book {
	constructor (title,author) {
		this.title = title;
		this.author = author;
	}
	getTitle() {
		return "Title: " + this.title;
	}
	getAuthor() {
		return "Author: " + this.author;
	}
}
let HP = new Book("Harry Potter","J.K. Rowling") 
	HP.getTitle();
	HP.getAuthor();

//======================================================================
//=======================Functional__Programming=================================
//https://edabit.com/challenge/hzxN9bAebBPNqdQto
function first(str) {
	function second(str) {
		return str;
	}
	return second(str);
}
//======================================================================
//https://edabit.com/challenge/cada8J3AWGRhwQhkk
function hacker(str) {

    let el = "";
for (let i = 0; i < str.length; i++){
     if (str[i] == "a"){
         el += "4";
     } else if (str[i] == "e"){
                el += "3";
     } else if (str[i] == "i"){
                el += "1";
     } else if (str[i] == "o"){
                el += "0";
     } else{
          el += str[i];
     }
}
    return el;
}
//======================================================================
https://edabit.com/challenge/tWgCG2PjN6FHq27S7
function VoW(str) {
	const vowels = ["a",'e','i','o','u'];
	let firststr = "";
	let secondstr = "";
	
	for (let i = 0; i < str.length; i ++) {
		if (vowels.indexOf(str[i]) > -1) {
			firststr += str[i]
		} else {
			secondstr += str[i]
		}
	}
	return firststr + secondstr;
}
//=====================================================================
//https://edabit.com/challenge/ENWFBL4jbTgLbSqwS
function addNumber(a) {
    let number = a
    return b => number+b
}
//==============================SCOPE=======================================
//https://edabit.com/challenge/9tJ97HK3c4Koy3KsF
function meta(a, b) {
  if (typeof(a) == "number" && typeof(a) == "number") {
    return `${a + b}`;
  } else if (typeof(a) == "string" && typeof(a) == "string") {
    return `${a + b}`;
  } else if (typeof(a[0]) == "number" && typeof(a[0]) == "number" ) {
    return `[${a}, ${b}]`;
  } else {
    return `["${a}","${b}"]`;
  }
}
//======================================================================
//https://edabit.com/challenge/w5LTwJwDLK4uQ3Dmv
function arsz(arr, number) {
	let i = 0;
	let temp = [];
	let result = []
	if (number == 1) {
		result = arr.map(function(x) {
			return [x];
		});
		return result;
	}
	let value = Math.round(arr.length / number);
	while (i < value) {
		result.push(Array())
		i++;
	}
	i = 0;
	for (let a of arr) {
		if (i == value) {
				i = 0;
		}
		result[i].push(a);
		i++;
	}
	return result;
}
//======================================================================
//https://edabit.com/challenge/ejzLBYvAtAiKk9HnP
function smallstep(num) {
	let array = (num + "").split("");
	let middle = Math.round(array.reduce((acc,val) => +acc + +val)/array.length);
	let count = 0;
	array.map(el => {
	count+= Math.abs(el - middle);
	return middle;
	});
	return count;
} 
//=============================???=========================================
//https://edabit.com/challenge/6ALbTxgu8BZaa6YYN
function mona(arr) {
	let count = 0;
	arr.sort((a,b) => {
	if (a > b) {
	count++; 
	return 1;
	}
  	if (a == b) return 0;
  	if (a < b) {
  	count++; 
  	return -1;
  	}
	})
	return count;
}

