export const HOST = "127.0.0.1";
export const USER = "root";
export const PASSWORD = "";
export const DB = "expense-tracker";
export const dialect = "mysql";
export const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
};