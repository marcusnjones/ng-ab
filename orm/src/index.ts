import "reflect-metadata";
import {createConnection} from "typeorm";
import {Entries} from "./entity/Entries";

createConnection().then(async connection => {

    console.log("Seeding database...");
    const data = require("./seed.json");
    data.forEach(async (item) => {
        const entry = new Entries();
            entry.firstName = item.firstName;
            entry.lastName = item.lastName;
            entry.email = item.email;
            entry.address = item.address;
            entry.city = item.city;
            entry.state = item.state;
            entry.zip = item.zip;
            entry.country = item.country;
            console.log("Saving " + entry.firstName + " " + entry.lastName)
            await connection.manager.save(entry);
    });
    console.log("Seeding completed!");

}).catch(error => console.log(error));
