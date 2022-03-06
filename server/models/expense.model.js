export default (sequelize, Sequelize) => {
    const Expense = sequelize.define("expense", {
        expense_name: {
            type: Sequelize.STRING
        },
    });
    return Expense;
};