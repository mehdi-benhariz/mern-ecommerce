import { useState } from "react";
import {API} from "../Api"

const SignUp = () => {

    const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleRegister=async(e)=>{
      e.preventDefault();
      const data = API.register(user)

      if(data.success){
          let newUser={email:user.email,password:user.password};
           API.login(newUser)  
          }
      else{
          console.log(data)
      }
  }
return (  
<div class="container max-w-full mx-auto md:py-24 px-6 bg-gray-200 " >
  <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
            <div class="w-full relative">
                <div class="md:mt-6">
                    <div class="text-center font-semibold text-black">
                        Register
                    </div>
                    <div class="text-center font-base text-black">
                       SignUp  to get an account
                    </div>
                    <form class="mt-8" x-data="{password: '',password_confirm: ''}">
                        <div class="mx-auto max-w-lg ">
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Username</span>
                                <input placeholder="" type="text"
                                       class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 
                                       placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white 
                                       focus:border-gray-600 focus:outline-none"
                                       onChange={(e)=>setuser({...user,name:e.target.value})}
                                       />
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Email</span>
                                <input placeholder="" type="email"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 
                focus:bg-white focus:border-gray-600 focus:outline-none"
                onChange={(e)=>setuser({...user,email:e.target.value})}
                />
                            </div>
                            <div class="py-1">

                                <span class="px-1 text-sm text-gray-600">Password</span>
                                <input placeholder="" type="password" x-model="password"
                                       class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300
                                        placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white 
                                        focus:border-gray-600 focus:outline-none"
                                        onChange={(e)=>setuser({...user,password:e.target.value})}
                                        />
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Password Confirm</span>
                                <input placeholder="" type="password" x-model="password_confirm"
                                       class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 
                                       placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white 
                                       focus:border-gray-600 focus:outline-none"
                                       onChange={(e)=>setuser({...user,password_confirmation:e.target.value})}
                                       />
                            </div>
                
                            <button class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
             onClick={handleRegister}
            >
                                Register
                            </button>
                        </div>
                    </form>

                    <div class="text-sm font-semibold block sm:hidden py-6  justify-center">
                        <a href="#"
                           class="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500">You're already member?
                            <span class="text-black font-semibold">
            Login
          </span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default SignUp;

