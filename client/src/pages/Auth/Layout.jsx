import React, { useState } from "react";
import LoginComponent from "../../Components/Login";
import RegisterComponent from "../../Components/Register";

function Layout() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div role="tablist" className="tabs tabs-boxed min-w-[300px] max-w-[600px] mx-auto">
        <a role="tab" className={`tab ${isLogin ? 'tab-active' : ''}`} onClick={()=>setIsLogin((prev)=>prev=true)}>
          Login
        </a>
        <a role="tab" className={`tab ${isLogin ? '' : 'tab-active'}`} onClick={()=>setIsLogin((prev)=>prev=false)}>
          Register
        </a>
      </div>
      <div className="min-w-[300px] max-w-[600px] mx-auto">
        {
            isLogin ? <LoginComponent/> : <RegisterComponent/>
        }
      </div>
    </>
  );
}

export default Layout;
