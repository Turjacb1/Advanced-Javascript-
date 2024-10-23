const normalPerson=
{
firstName:'elon',
lastName:'chakraborty',
salary:150000,

getFullname()
{
    console.log(this.firstName,this.lastName);
},
changBil: function(amount)
{
    this.salary=this.salary-amount;
    return this.salary;
}

}

const heroPerson=
{
    firstName:'turja',
lastName:'chakraborty',
salary:100000

}

// const heroBil=normalPerson.changBil.bind(heroPerson);
// heroBil(30000);

normalPerson.changBil.call(heroPerson,900);
console.log(heroPerson.salary);

// normalPerson.changBil(150);
// normalPerson.changBil(3000);
// console.log(normalPerson.salary);

