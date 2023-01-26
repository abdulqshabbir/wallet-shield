## App's Purpose
This is a budgeting application that helps you become aware of what you spend, get out of debt, and take control of your financial freedom!

## Major Functions
- Users can create categories which define similar expenses (for example, the entertainment category can include movies, arcade, skiing, etc.)
- Users can create an expense which belongs to a single category and set a monthly budget (for example, movies belongs to the Entertainment category and you might allocate 15CAD to movies for this month)
- Users can delete a category which will delete all expenses inside of that category (for example, deleting the Entertainment category automatically deletes movies, arcade, and skiing)
- Users can add a transaction. Transactions are a way of creating a record anytime you spend money. For example, when going to the grocery store, user can log a transaction of 50CAD. This will reduce the monthly expense budget for groceries by that amount.
- User can visually see a progress bar that drops over time as they log more transactions which serves as a visual reminder of how much they have left for that month

## Dependenies
- Server Dependencies
    ```js
    "cors": "^2.8.5", 
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "mysql2": "^2.3.3",
    "pg": "^8.7.3",
    "sequelize": "^6.17.0"
    ```
- Client Dependencies
    ```js
    "@fortawesome/fontawesome-svg-core": "^1.3.0",
    "@fortawesome/free-solid-svg-icons": "^6.0.0",
    "@fortawesome/react-fontawesome": "^0.1.17",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4",
    "autoprefixer": "^10.4.2",
    "postcss": "^8.4.7",
    "tailwindcss": "^3.0.23"
    ```

## Build Instructions
To start server, run `npm run start`. To build client files run `cd client && npm install && npm run build` from inside the root directory.

## Deploy Instructions
To deploy to heroku run, `git push heroku main`.


## Database Table Schemas

### Category Table
| Attribute | Type  |
| ------------- |:-------------:|
| id | INT |
| name| VARCHAR|

### Expense Table
| Attribute | Type  |
| ------------- |:-------------:|
| id | INT |
| name| VARCHAR|
| max | FLOAT |
| remaining | FLOAT |
| categoryId | FOREIGN KEY |

### Transaction Table
| Attribute | Type  |
| ------------- |:-------------:|
| id | INT |
| amount| FLOAT|
| isOutflow | BOOLEAN |
| repeat | STRING |
| memo | STRING |
| date | STRING |


## TODO
### Reorder Categories
* Drag and drop to reorder categories
### Overspent
* Select two categories and add money to the one that has been overspent
### Assign Money
* Allow user to assign a monthly income to spend from

### Money Age
* Calculate the age of the money in the account

## Notes
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Tailwind cheatsheet](https://tailwindcomponents.com/cheatsheet/)
- [Express Cheat Sheet](https://expressjs.com/en/starter/examples.html)
