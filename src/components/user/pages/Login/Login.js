import React, { useState } from 'react';
import { useNavigate } from  'react-router-dom';
import Button from '../../../common/Button/Button';
import Logo from '../../../common/Logo/Logo';
import './Login.css';

const Login = () => {

    const [toggle, setToggle] = useState(false);

    let navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard", { replace: true });
    };

  return (
    <div className="loginBody">
            <div className="loginPageCard">
                <div>
                <div className="logoDiv">
                    <Logo/>
                </div>
                {
                    toggle ? <form className="f-grid" action="">
                        <div className="f-grid w-8 tl">
                            <label htmlFor="">Name:</label><br />
                            <input className="pb bo" type="text" required/>
                        </div>
                        <div className="f-grid w-8 tl">
                        <label htmlFor="">Email/Phone:</label><br />
                            <input className="pb bo" type="text" required/>
                        </div>
                        <div className="f-grid w-8 tl">
                        <label htmlFor="">Password:</label><br />
                            <input className="pb bo" type="Password" required/>
                        </div>
                        <Button style={{ width: "100%" }} text="Sign Up" />
                    </form> :
                        <form className="f-grid" action="">
                            <div className="f-grid w-8 tl">
                            <label htmlFor="">Email/Phone:</label><br />
                                <input className="pb bo" type="text" required/>
                            </div>
                            <div className="f-grid w-8 tl">
                            <label htmlFor="">Password:</label><br />
                                <input className="pb bo" type="Password" required/>
                            </div>
                            <Button handleLogin={handleLogin}  style={{ width: "100%" }} text="Login" />
                        </form>
                }
                <div className="toggleBox">
                    {
                        toggle ?
                            <p>Already have an account?<span onClick={() => setToggle(prev => !prev)}>  Please Sign In</span></p> :
                            <p>Dont't have an account?<span onClick={() => setToggle(prev => !prev)}>  Please Sign Up</span></p>
                    }
            </div>
            <div className="f-flex">
                    <div className="f-line"></div>
                    <h2>OR</h2>
                    <div className="f-line"></div>
                </div>
                <div className="f-grid tl">
                    <button className="btn black">
                        Continue With Google
                    </button>
                </div>
                <div className="f-grid tl">
                    <button className="btn black">
                        Continue With GitHub
                    </button>
                </div>
                </div>
            </div>
        </div>
  );
};

export default Login;