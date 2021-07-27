
const express = require("express");
const app = express();
const port = 8000;

var faker = require('faker');


class User {
    constructor(){
        this.id=faker.datatype.number();
        this.firstName=faker.name.lastName();
        this.lastName=faker.name.lastName();
        this.phoneNumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}
class Company  {
    constructor(){
        this.id=faker.datatype .number();
        this.name=faker.name.findName();
        this.address={
            street:faker.address.streetName(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country(),
        };
       
    }
}
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    res.json( new User() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
});

app.get("/api/user/company", (req, res) => {
    res.json( [new Company(),new User()] );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );