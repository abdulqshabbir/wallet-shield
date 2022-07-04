import React, { useEffect, useState } from 'react';
import SiteWrapper from "../components/Shared/SiteWrapper"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useCategories } from "../contexts/Categories"
import { useExpenses } from '../contexts/Expenses';
import Header from "../components/Shared/Header"

ChartJS.register(ArcElement, Tooltip, Legend);

export default function App() {
    const [ data, setData ] = useState(null)
    const [ categories,  ] = useCategories()
    const [ expenses,  ] = useExpenses()

    useEffect(() => {
        setData(createCategorySpendingDataForPieChart(categories, expenses))
    }, [expenses, categories])

    if (data !== null) {
        return (
          <SiteWrapper>
              <Header />
              <div className='flex justify-center items-center h-[80vh] w-[100%]'>
                <div className='h-[600px] w-[600px]'>
                  <Pie data={data} height={"400px"} width={"400px"} />
                </div>
              </div>
          </SiteWrapper>
       );
    } else {
        return null
    }
}

function createCategorySpendingDataForPieChart(categories, expenses) {
  const startingData = {
    labels: [],
    datasets: [
      {
        label: 'Category Spending',
        data: [],
        backgroundColor: [
          '#475569',
          '#FB923C',
          '#4D7C0F',
          '#155E75',
          '#9F1239',
          '#5B21B6',
          '#A3E635',
          '#713F12',
          '#A3A3A3'
        ],
        borderColor: [
          '#475569', 
          '#FB923C',
          '#4D7C0F',
          '#155E75',
          '#9F1239',
          '#5B21B6',
          '#A3E635',
          '#713F12',
          '#A3A3A3'
        ],
        borderWidth: 1,
      },
    ],
  };

  let categorySpendingData = categories.map(c => {
    let categorySpending = expenses.reduce((acc, expense)=> {
        if (expense.categoryId === c.id) {
          acc += expense.max 
        }
        return acc
    }, 0)

    return {
      categoryId: c.id,
      categoryName: c.name,
      categorySpending: categorySpending
    }
  })

  startingData.labels = categorySpendingData.map(c => c.categoryName)
  startingData.datasets[0].data = categorySpendingData.map(c => c.categorySpending)
  console.log(startingData)
  return startingData
}