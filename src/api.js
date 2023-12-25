import { wait } from "@testing-library/user-event/dist/utils";

export async function getVans() {
    const res = await fetch('/api/vans');

    if(!res.ok){
        
        // eslint-disable-next-line no-throw-literal
        throw  {
            message: 'Faild to fetch vans',
            statusText: res.statusText,
            status: res.status
        }
       
        

    }
    
    const data = await res.json();
    console.log(data)
    return data.vans;
}