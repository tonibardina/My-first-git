# My First GIT!

Some of my first code..

```javascript
function piramFibo (numMax) {

	var f = [];
    var stop = 2;
    var counter = 2;

    do {

    	if(f.length === 0) {
    		f.push(0)
    		console.log(f)
    		f.push(1)
    		console.log(f)
    	}

    	if(counter<numMax) {
    		var newNum = f[f.length-1] + f[f.length-2]
            f.push(newNum)
    		console.log(f)
    	}else if(counter>=numMax){
    		f.pop();
    		console.log(f)
    	}

	stop += 1
	counter += 1

}while(stop < numMax * 2 - 1);

}

piramFibo(8)
```
