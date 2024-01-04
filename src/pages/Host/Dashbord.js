import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getUser } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";
import Error from "../../components/Error";



export async function loader({request}) {
    const res = await requireAuth(request)
    if(res) {
        return res
    }
    

    return defer({user: getUser()}) 
}

export default function Dashbord() {
    const incomePromise = useLoaderData()

    function renderElement(user) {
        console.log(user)
        return(
            <>
            <div className="dashbord lastdays container">
                <div>
                    <h2 className="dashbord lastdays title">Welcome!</h2>
                    <p className="dashbord lastdays description">Income at last <span className="dashbord lastdays description span">30 days</span></p>
                    <p className="dashbord ladtdays data">${user.lastdays}</p>
                </div>
                <div>
                    <Link to='income'>Details</Link>
                </div>
               
            </div>
            <div className="dashbord review container">
                <p className="dashbord review text"><span className="dashbord review description">Review score</span> <span className="dashbord review score"><span className="dashbord review text star">&#9733;</span> {user.review.score}</span>/{user.review.number}</p>
                <Link to='reviews'>Details</Link>
            </div>
            <div className="dashbord vanlist container" >
                <p className="dashbord vanlist text">Your listed vans</p>
                <Link to='vans'>View all</Link>
            </div>
            </>
        )
       
    }

    return(
        <div dashbord container>
            
          
          
             <Suspense fallback={<h3 className="dashbord loading">Loading data...</h3>}>
                <Await resolve={incomePromise.user} errorElement={<Error />}>
                    {renderElement}
                </Await>
             </Suspense>
             
        </div>
       
    )
}