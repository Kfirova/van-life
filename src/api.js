
export async function getUser(){
    const res = await fetch('/api/host/lastdays')

    if(!res.ok){
        // eslint-disable-next-line no-throw-literal
        throw  {
            message: 'Faild to fetch Income last 30 days',
            statusText: res.statusText,
            status: res.status
        }
          
    }

    const data = await res.json()
    console.log(data.users)
    return data.users;
}



export async function getVans(id) {
    
    const url = id ? `/api/vans/${id}` : '/api/vans';
    const res = await fetch(url);

    if(!res.ok){
        // eslint-disable-next-line no-throw-literal
        throw  {
            message: 'Faild to fetch vans',
            statusText: res.statusText,
            status: res.status
        }
          
    }
  
    const data = await res.json();
    
    return data.vans;
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` :  '/api/host/vans'
    const res = await fetch(url)

    if(!res.ok) {
       // eslint-disable-next-line no-throw-literal
       throw  {
        message: 'Faild to fetch vans',
        statusText: res.statusText,
        status: res.status
    }
    }

    const data = await res.json()
    return data.vans;
}

export async function loginUser(creds) {
    const res =  await fetch('/api/login', {
        method: 'post',
        body: JSON.stringify(creds)
    })

    const data = await res.json()
    if(!res.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}