import { Await, defer, useLoaderData } from "react-router-dom"
import { requireAuth } from "../../utils"
import { getUser } from "../../api"
import { Suspense} from "react"
import { Bar } from "react-chartjs-2";
import {Chart as CharsJS} from "chart.js/auto"


export async function loader({request}) {
    
    const res = await requireAuth()
    if(res) {
        return res
    }

    return defer({user: getUser()})
}

export default function Income() {
    const userPromise = useLoaderData()

function renderElement(user) {

const data = {
  labels: Object.keys(user.income),
  datasets: [{
    
    label: 'Income',
    data: Object.values(user.income),
    backgroundColor: [
    //   'rgba(255, 99, 132, 0.2)',
    //   'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
    //   'rgba(75, 192, 192, 0.2)',
    //   'rgba(54, 162, 235, 0.2)',
    //   'rgba(153, 102, 255, 0.2)',
    //   'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
    //   'rgb(255, 99, 132)',
    //   'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
    //   'rgb(75, 192, 192)',
    //   'rgb(54, 162, 235)',
    //   'rgb(153, 102, 255)',
    //   'rgb(201, 203, 207)'
    ],
    borderWidth: 2
  }]
};
    
    return(
        <>
            <div className="income container">
                <h1 className="income title">Income</h1>
                <p className=" income lastdays text">Last <span>30 days</span></p>
                <p className="income lastdays data">${user.lastdays}</p>
            </div>
            <div className="income chart">
                <Bar data={data} className="income chart item"/>
            </div>
            <div className="income transactions container">
                <h3>Your transactions ({user.transactionsData.length})</h3>
                <p className="income transactions text">Last <span>30 days</span></p>
            </div>
                <div className="income transction map">
                    {user.transactionsData.map(e => 
                        (
                                <div key={e.id}>
                                    <h4 className="income transaction amount">{e.amount}  </h4> 
                                    <p className="income transaction date">   {e.date}</p>
                                </div>
                        )
                            
                            
                        )}
                </div>
                    
           
        
        </>
    )
}

    return (
        <Suspense fallback={<h3 className="Income loading">Loading data...</h3>}>
            <Await resolve={userPromise.user}>
                {renderElement}
            </Await>
        </Suspense>
        
    )
}