const express = require("express");
const contacts = require("../controllers/contact.controller");

module.exports = (app) => {
    const router = express.Router();

    router.route("/")
        .get(contacts.findAll)
        .post(contacts.create)
        .delete(contacts.deleteAll);
        
    router.route("/favorite")
        .get(contacts.findAllFavorite);

    router.route("/:id")
        .get(contacts.findOne)
        .put(contacts.update)
        .delete(contacts.delete);
    // Create a new contact
    // router.post("/",contacts.create);

    // //Retrieve all contacts
    // router.get("/", contacts.findAll);

    // //Retrieve all favorite contacts
    // router.get("/favorite", contacts.findAllFavorite);

    // //Retrieve a single contact with id
    // router.get("/:id", contacts.findOne);
    
    // //Update a contact with id
    // router.put("/:id", contacts.update);

    // //Delete a contact with id
    // router.delete("/:id", contacts.delete);

    // //Delete all contacts
    // router.delete("/", contacts.deleteAll);

    app.use("/api/contacts", router);
};