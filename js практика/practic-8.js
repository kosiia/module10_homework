/*   --8--
Создайте произвольный массив Map. 
Получите его ключи и выведите в консоль все значения в виде 
«Ключ — Х, значение — Y».
Используйте шаблонные строки. */

let myFamily = new Map();
myFamily.set('mother', 'Tanya');
myFamily.set('father', 'Valera');
myFamily.set('sister', 'Nastya');

for (let [post, name] of myFamily) {
    console.log(`Ключ — ${post}, значение — ${name}`)
}