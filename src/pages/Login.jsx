import React from "react";
import { useState } from "react";
import wagesOne from "../assets/wages-one.png";
import wagesLogo from "../assets/wagesLogo.svg";
import LoginCom from "../components/LoginCom";
import ForgetCom from "../components/ForgetCom";
import VerifyOtpCom from "../components/VerifyOtpCom";
import ChangePassword from "../components/ChangePassword";
import SuccessCom from "../components/SuccessCom";

const Login = () => {
  const [component, setComponent] = useState("Login");
  const [userEmail, setUserEmail] = useState("");
  const [uuid, setUuid] = useState("");

  return (
    <main className="flex md:grid md:grid-cols-2 flex-col-reverse min-h-screen">
      <section className="bg-[#001e06] hidden  md:block  p-4 items-center pb-5 md:pb-0 justify-center">
        <img src={wagesLogo} alt="wages-logo" />
        <div className="pt-5 flex justify-center mt-[8rem]  w-full">
          <img className="h-[40vh]" src={wagesOne} />
        </div>
      </section>

      <section className="flex min-h-screen  w-full gap-8 flex-col justify-center m-auto bg-white">
        <div className="w-[80%] md:w-[75%] lg:w-[65%] my-8 mx-auto flex flex-col justify-center items-center">
          {component === "Login" && <LoginCom setComponent={setComponent} />}
          {component === "Forget" && (
            <ForgetCom
              setUserEmail={setUserEmail}
              setComponent={setComponent}
            />
          )}
          {component === "Verify" && (
            <VerifyOtpCom
              setComponent={setComponent}
              userEmail={userEmail}
              setUuid={setUuid}
            />
          )}
          {component === "Change" && (
            <ChangePassword setComponent={setComponent} uuid={uuid} />
          )}
          {component === "Success" && (
            <SuccessCom setComponent={setComponent} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Login;
