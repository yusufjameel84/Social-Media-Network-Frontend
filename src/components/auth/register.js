import React , {useState} from 'react';

function Register() {

  const [values , setValues] = useState({
    name : "",
    email: "",
    password: "",
    password2: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target; // destructuring
    
    setValues({
      ...values,               // previous values , spread syntax
      [name] : value,           // key value 
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();          // prevent from following a link

    const newUser ={
      name : values.name,
      email: values.email,
      password: values.password,
      password2: values.password2
    }

    console.log(newUser) ; 
  }


  return (
    <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your DevConnector account</p>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg" placeholder="Name" name="name" value = {values.name} onChange={handleOnChange} input />
            </div>
            <div className="form-group">
              <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value = {values.email}  onChange={handleOnChange}/>
              <small classNameName="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value = {values.password}  onChange={handleOnChange}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" value = {values.password2}  onChange={handleOnChange}/>
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register ;
