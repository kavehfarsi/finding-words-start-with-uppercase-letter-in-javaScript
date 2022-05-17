let text = "This Code is For Counting Words in a Text start with UpperCase Letters";
let count =0;
const array = text.split(" ");
for(let x in array)
{
    if(array[x]!==array[x].toLowerCase())
    {
        count++;
    }
}
console.log(count)
