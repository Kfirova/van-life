import {Form, redirect, useActionData, useLoaderData, useNavigation, useSearchParams} from "react-router-dom";
import { loginUser } from "../api";

export async function loader({request}){
return new URL(request.url).searchParams.get('message')
}

export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const redirected = new URL(request.url).searchParams.get('redirected') || '/host'
    
   try {
    await loginUser({email, password})
    localStorage.setItem('loggedin', true)
    const response = redirect(redirected)
    response.body = true
    return response
       
   }catch(err) {
    return err
   }
       
}


export default function Login() {
    
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()
    const state = navigation.state
   
   
    return (
        <div>
            <div className="login container">
                <h2 className="login title">Sign in to your account</h2>
                {errorMessage && <h3 className="login message">{errorMessage.message}</h3>}
                {((message && !errorMessage))&& <h3 className="login message">{message}!</h3>}
                <Form method="post" className="login form" replace>
                    <input
                        className="login input"
                        name="email"
                        type="email"   
                        placeholder="Email Address"                 
                    
                    />
                    <input
                        className="login input"
                        name="password"
                        type="password"   
                        placeholder="Password"                 
                    
                    />

                    <button 
                        className="login btn" 
                        disabled = {state === 'submitting'}
                         >
                          {state === 'submitting' ?
                        'Logging in...' :
                          'Log In'}
                          
                    </button>
                </Form>
            </div>
        </div>
    )
}