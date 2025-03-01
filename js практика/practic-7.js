/*   --7--
Дан массив. Нужно вывести в консоль количество чётных и 
нечётных элементов в массиве. Если в массиве есть нулевой элемент, 
то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может 
содержать не только числа, но и, например, знаки, null и так далее.*/

const arr = [1, 3, 2, 4, 7, true, 6]
let chetElem = []
let nechetElem = []
let otherElem = []

for(let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== 'number') {
        otherElem.push(arr[i])
    } else if (arr[i] % 2 !== 0) {
        nechetElem.push(arr[i])
    } else {
        chetElem.push(arr[i])
    }
}

console.log(`количество чётных элементов - ${chetElem.length}`)
console.log(`количество не чётных элементов - ${nechetElem.length}`)
