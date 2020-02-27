# Introduction
**Algorithm**: A finite sequence of well-defined instructions to solve a problem.

For solving a problem **data structures** are our weapons.

You can measure how good is a solution by determining its **space and time complexity**. You need to tell this complexities in the best case, worst case, and average case.

## Big Oh Notation
It is a way to describe the **space and time complexity** of an algorithm. It uses de **O** for the worst case, **θ**(Theta) for the average case and **Ω**(Omega) for the best case. You learn more about it in this [beginner's guide](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)

### O(1)
When the algorithm has the same duration no matter how many entries are given. **Example**: When we want to access an known index in an array; it doesn't matter how big is the array, if we already know the index.
``` 
array[2]
```

### O(N)
The number of operation we perfom depend in the number of elements given. Noramlly you can identify this case because the algorithm contains a **loop**. **Example**: A sequential search.

```
foreach (var element in elements) {
    if (element == value) return true;
}
```

### O(N<sup>2</sup>)
A quadratic time algorithm takes the square of the size of the input data set to find a solution. You can identify this case when an algorithm is using a **nested loop**. **Example**: Finding duplicates.
```
for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array.length; j++) {
		if (array[i] == array[j])
			return false;
	}
}
```

### O(2<sup>N</sup>)
An algorithm which operations growth doubles when an element is added to the input data set. **Example**: [The fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) 

0, 1, 1, 2, 3, 5, 8

The next number is given by the addition of the previous two elements.

```
function Fibonacci(int number) {
	if (number <= 1)
		return 1;
	
	return Fibonacci(number - 2) + Fibonacci(number - 1);
}
```

### Log(N)
When an algorithm operations are reduced in half as the iterations continues. **Example**: **Binary Search**