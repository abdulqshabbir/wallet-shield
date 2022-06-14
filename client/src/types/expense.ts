export interface IExpense {
    id: number,
    name: string,
    updatedAt: string,
    createdAt: string,
    max: number,
    remaining: number,
    userId: number,
    categoryId: number
}