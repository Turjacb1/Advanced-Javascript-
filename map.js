const number=[10,20,30,40];
const result=number.map(function(element)
{
    return element*element;
})
console.log(result);


const num=[1,2,3,4,5];
const noton=num.filter(x=>x<2);
console.log(noton);


const student=[
    {id:1 ,name:'turja'},
    {id:2 ,name:'tanay'},
    {id:3 ,name:'elon_mask'}

];
const names=student.map(s=>s.name);
console.log(names);