function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-3">
                <h1 className="login-title">Log In to BOS Post</h1>
                    <form action="">
                        <label className="labels form-label" for="email">Email Address</label>
                        <input className="form-control mb-3" type="text" id="email" />
                        <label className="labels form-label" for="password">Password</label>
                        <input className="form-control mb-3" type="text" id="password" />
                        <div class="d-grid gap-2">
                            <button className="btn btn-primary btn-lg" type="submit" >Login</button>
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login;