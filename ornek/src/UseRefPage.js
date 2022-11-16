import React from 'react'

export default function UseRefPage() {


    const emailInputRef = React.useRef();
    const passwordInputRef = React.useRef();

    React.useEffect(()=>{
        emailInputRef.current.focus();
        emailInputRef.current.value = "ilk deger";

    })
  return (
    <div className='container'>

 
            <div className='row'>
                <div className='col-md-5'>
                </div>
                <div className='col-md-2'>

                <h1>Login Page</h1>


                <div className='mb-3'>
                <label htmlFor="email"> Email address</label>
                <input ref={emailInputRef}
                
                onKeyDown = {
                    (evt) =>{
                        if(evt.key ==='Enter'){
                            passwordInputRef.current.focus();
                        }
                    }
                }
                
                type="email" name="" id="" />
                </div>

                <div className='mb-3'>
                <label htmlFor="password"> Password</label>
                <input ref={passwordInputRef} type="password" name="" id="" />
                </div>

                <div className='mb-3'>
                <button className='btn btn-check' >Login</button>
                </div>

                </div>
                <div className='col-md-5'>
                </div>
            </div>

        </div>
  )
}
