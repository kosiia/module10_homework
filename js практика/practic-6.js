/*    --6-- 
Дан массив. Проверить, одинаковые ли элементы в массиве и 
вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, 
а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

const arr = [1, 1, 1, 5, 1]
let result 

for(let i = 0; i < arr.length; i++) {
    for(let x = 0; x < arr.length; x++) {
        if (arr[i] === arr[x]) {
            result = true
        } else {
            result = false
            break
        }
    }
}
console.log(result)