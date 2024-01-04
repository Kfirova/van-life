import { Await, defer, useLoaderData } from "react-router-dom"
import { requireAuth } from "../../utils"
import { getUser } from "../../api"
import { Suspense } from "react"
import { Bar } from "react-chartjs-2";
import "chart.js/auto"

export async function loader({request}) {
    const res = await requireAuth()
    if(res) {
        return res
    } 

    return defer({user: getUser()})
}

export default function Reviews() {
const userPromise = useLoaderData()
function renderElement(user) {
    const data = {
        labels: ['5 stars', '4 stars','3 stars','2 stars','1 star'],
        datasets: [{
        barPercentage: 0.4,
          backgroundColor: 'orange',
          borderRadius: 15,
          axis: 'x',
          label: 'Rating',
          data: [5, 0, 0 ,0 ,0],
          fill: true,
          indexAxis: 'y'
         
          
        }]
      };

      function stars(data){
        if(data === 1 ) {
            return <span className="reviews user stars">&#9733;</span>
        } else if(data === 2){
            return <span className="reviews user stars">&#9733; &#9733;</span>
        }
         else if(data === 3){
            return <span className="reviews user stars">&#9733; &#9733; &#9733;</span>
        }
         else if(data === 4){
            return <span className="reviews user stars">&#9733; &#9733; &#9733; &#9733;</span>
        }
         else if(data === 5){
            return <span className="reviews user stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
        }
        

      }

    
    return(
        <>
        <div className="reviews title container">
            <h1 className="reviews title item">Your reviews</h1>
            <p className="reviews text">Last <span>30 days</span></p>
            
        </div>
        <div>
            <p>{user.review.score}<span className="star"> &#9733;</span> <span>overall rating</span></p>
            <div className="reviews chart">
                <Bar data={data} className="reviews chart item"/>
            </div>
        </div>
        <div>
            <h2 className="reviews user title">Reviews ({user.reviewsData.length})</h2>
            {user.reviewsData.map(e => {
                return (
                    <div key={e.id} className="reviews user">
                    <p>{stars(e.rating)}</p>
                    <p className="reviews user text"><span>{e.name}</span> {e.date}</p>
                    </div>
                )
            }
                
            )}
        </div>
        </>
     
    )
}

    return (
      <Suspense fallback={<h3 className="reviews loadind">Loading Reviews...</h3>}> 
        <Await resolve={userPromise.user}>
            {renderElement}
        </Await>
      </Suspense>
        
    )
}