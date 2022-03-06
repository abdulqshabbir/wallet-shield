import db from "../models";

const ExpenseTable = db.expense;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    return;
  }
  // Save expense in the database
    const expenseName = req.body.expenseName
    ExpenseTable.create(expenseName)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the expense."
      });
    });
};