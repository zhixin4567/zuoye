(function() {
    for(var i = 0 ;i<array.length;i++){
    	array[i] = i*10;

    }
    console.log('array ='+array);
    console.log(''+new Date());
    window.setTimeOut(function()){
    	console.log('timeout text');
    },2000)
    function sayHello (name , age){
    	console.log('name:' + name);
    	console.log("age:" + age);
    }
    window.setTimeout(sayHello,2000,'Ada',19);

    var btn = document.getElementById("a");


	btn.onclick = function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
//shidhid
function(){}
}(window))

