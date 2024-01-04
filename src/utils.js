import {redirect } from "react-router-dom";


export async function requireAuth(request) {
   
    const pathname = request && new URL(request.url).pathname
    const redirected = pathname && `redirected=${pathname}`
    const isLoggedIn = localStorage.getItem('loggedin')
    console.log(isLoggedIn);

    if(!isLoggedIn) {
       
        const response = redirected ? redirect(`/login?message=You must log in first&${redirected}`) : redirect(`/login?message=You must log in first`)
        response.body = true
        return response

    }
   
    return null

}