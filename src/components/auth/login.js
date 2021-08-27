import React , {useState} from 'react'

function Login() {

  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;

  const onSubmit = (e) => {
    e.preventDefault();          

    const user = {
      
      email: email,
      password: password
      
    }

    console.log(user) ; 
  }


  return (
    <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Sign in to your DevConnector account</p>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login ;
