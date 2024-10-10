var a=[1,2,3,"hima",true];                                                               //1
a.push(false);
console.log(a);

var b=[1,2,3,"hima",{name:"bindu",place:"atp"},true];                                      //2
b.pop();
console.log(b);

var c=[1,2,3,"hima",{name:"bindu",place:"atp"},true];                                     //3
c.unshift(10,20);
console.log(c);

var d=[1,2,3,"hima",{name:"bindu",place:"atp"},true];                                     //4
d.shift();
console.log(d);

var e=[1,2,3,"hima",{name:"bindu",place:"atp"},true];                                      //5
console.log(e.reverse());

var f=[1,2,3,"hima",{name:"bindu",place:"atp"},true];                                       //6
console.log(f.indexOf("hima"));

var g=[1,2,3,"hima",{name:"bindu",place:"atp"},true];                                       //7
console.log(g.includes(true));

var h=[1,20,3,35,100,50,8];                                                                 //8
h.sort(function(a,b){return a-b });                    // sort for numbers
console.log(h);
var i=["book","laptop","pen","study","work"]; 
console.log(i.sort());                                 // default sort only for strings

var j=["hello","everyone","how are you"];                                                    //9
console.log(j.join(","));

console.log("--------------------MULTIPLE ARRAY METHODS-------------------------------------");

var k=[1,2,"hima",{name:"bindu",place:"atp"},true];                         //1
k.push(false);
k.shift() ;
console.log(k);

var l=[1,2,"hima",{name:"bindu",place:"atp"},true];                         //2
l.reverse();
console.log(l.join());

var m=["pen","work","lap","book"];                                          //3
m.sort();
m.pop();
console.log(m);

var n=[1,2,"hima",{name:"bindu",place:"atp"},true];                         //4
n.unshift(10,20);
n.shift();
console.log(n.length);

var arr1=["iphone","samsung","realme","redme"];                             //5
var arr2=["hima","bindu"];
var arrconcat=arr1.concat(arr2);
arrconcat.sort();
arrconcat.pop();
console.log(arrconcat);
