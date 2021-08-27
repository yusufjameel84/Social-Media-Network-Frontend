import React , {useState} from 'react'

function Login() {

  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;

  const onSubmit = (e) => {
    e.preventDefault();          

    const newUser ={
      
      email: email,
      password: password,
  
    }

    console.log(newUser) ; 
  }


  return (
    <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Log In</h1>
          <p class="lead text-center">Sign in to your DevConnector account</p>
          <form onSubmit={onSubmit}>
            <div class="form-group">
              <input type="email" class="form-control form-control-lg" placeholder="Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login ;
