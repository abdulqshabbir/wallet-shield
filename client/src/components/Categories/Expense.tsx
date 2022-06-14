import { IExpense } from "../../types/expense"

interface IProps {
	expense: IExpense
}

export default function Expense({ expense }: IProps) {
	return (
		<div className="h-16 px-4 flex flex-wrap justify-between items-center border-b-[1px]">
			<h3 className="mx-8 flex justify-center items-center">{expense.name}</h3>
			<p className="mx-8 flex justify-center items-center">{expense.max} CAD</p>
		</div>
	)
}