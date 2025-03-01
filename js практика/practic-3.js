/*   --3-- 
Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
Например, "Hello" -> "olleH". */

let str = 'Hello';
let result = '';
for (let i = str.length-1; i >= 0; i--) {
    result = result + str[i];
}
console.log(result)