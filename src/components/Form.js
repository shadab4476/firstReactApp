import { useState } from "react";
import axios from "axios";
import StatusShow from "./StatusShow";
import Input from "./Input";
import { Link, useNavigate } from 'react-router-dom';

function Form({ formType }) {
    const redirect = useNavigate();
    const [errors, setErrors] = useState({});
    const [formRegisterData, setFormRegisterData] = useState({
        email: "",
        name: "",
        password: "",
    });
    const [formLoginData, setFormLoginData] = useState({
        email: "",
        password: "",
    });
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(formLoginData);
        try {
            await axios.post("http://localhost:8000/api/login", formLoginData).then((res) => {
                console.log(res);
                if (res.data.status == false) {
                    setErrors(res.data.message);
                } else {
                    setErrors({});
                    redirect('/');
                }
            });
        } catch (error) {
            console.log(error.message);
            setErrors(error.message + ' Something Went Wrong...!!');
        }
        console.log("login");
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(formRegisterData);
        try {
            await axios.post("http://localhost:8000/api/register", formRegisterData).then((res) => {
                console.log(res);
                if (res.data.status == false) {
                    setErrors(res.data.message);
                } else {
                    setErrors({});
                    redirect('/');
                }
            });
        } catch (error) {
            console.log(error.message);
            setErrors(error.message + ' Something Went Wrong...!!');
        }
        console.log("register");
    };
    const handleChange = (e) => {
        setFormRegisterData({
            ...formRegisterData,
            [e.target.name]: e.target.value
        });
        setFormLoginData({
            ...formLoginData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <>
            <div className="w-[25%] mx-auto p-4 bg-red-400 ">
                <from className="w-full mt-0 block mt-3 flex-wrap flex gap-y-3">
                    <h1 className="md:text-3xl text-xl w-full text-center font-bold text-gray-700"> {formType == 'register' ? "Registration" : "Login"} Form</h1>
                    {formType == 'register' ? <div className="w-full">
                        <Input forLabel="name" functionCall={handleChange} labelText="Name" inputType="text" inputName="name" inputPlaceholder="Name" />
                    </div>
                        : <span className="text-red-600 font-bold text-xl text-center block  w-full">{errors.error && errors.error != "" ? errors.error : ""}</span>}
                    <StatusShow message={errors.name} danger="true" />
                    <div className="w-full">
                        <Input forLabel="email" functionCall={handleChange} labelText="Email" inputType="email" inputName="email" inputPlaceholder="Email" />
                    </div>
                    <StatusShow message={errors.email} danger="true" />

                    <div className="w-full">
                        <Input forLabel="password" functionCall={handleChange} labelText="Password" inputType="password" inputName="password" inputPlaceholder="Password" />
                    </div>
                    <StatusShow message={errors.password} danger="true" />

                    <button type="submit" onClick={formType == 'register' ? handleRegister : handleLogin} className=" w-full  py-2 text-xl font-[500] bg-blue-500 hover:bg-blue-600 transition-all text-white">    {formType == 'register' ? "Registration" : "Login"} </button>
                </from >

                {formType == 'register' ? <div className="w-full">
                    <p className="text-center text-gray-700 mt-2">Already have an account?
                        <Link to="/login" className="text-blue-700  underline capitalize mx-1">Login</Link>now.</p>               </div>
                    :
                    <p className="text-center text-gray-700 mt-2">Don’t have an account?
                        <Link to="/Register" className="mx-1 text-blue-700 underline capitalize">Register</Link>now.</p>}
            </div >
        </>
    );
}

export default Form;
