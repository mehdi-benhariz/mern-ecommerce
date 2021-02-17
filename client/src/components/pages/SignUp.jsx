import { useState,useHistory } from "react";

const SignUp = () => {
    let history = useHistory();

    const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const {password,password_confirmation,name,email} = user;

  const handleRegister=async(e)=>{
      e.preventDefault();
      const res = await fetch('http://localhost:5000/api/signup',{method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }
      )
      const data = await res.json()
      if(data.success)
          history.push("/login")
      
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



{/* <div class="flex justify-start mt-3 ml-4 p-1">
<ul>
    <li class="flex items-center py-1">
        <div class={`${"bg-green-200 text-green-700 "&& password == password_confirmation &&
          password.length > 0} ${'bg-red-200 text-red-700'&&password != password_confirmation || password.length == 0}`}
             class=" rounded-full p-1 fill-current ">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path x-show={password == password_confirmation && password.length > 0} stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"
                      d="M5 13l4 4L19 7"/>
                <path x-show={password != password_confirmation || password.length == 0} stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"/>

            </svg>
        </div>
        <span class={`${'text-green-700'&& password == password_confirmation && password.length > 0}
         ${'text-red-700'&&password != password_confirmation || password.length == 0}`}
              class="font-medium text-sm ml-3"
              x-text={password == password_confirmation && password.length > 0 ? 'Passwords match' : 'Passwords do not match' }></span>
    </li>
    <li class="flex items-center py-1">
        <div class={`${'bg-green-200 text-green-700' &&password.length > 7} 
                 ${'bg-red-200 text-red-700'&&password.length < 7 }`}
             class=" rounded-full p-1 fill-current ">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path x-show="password.length > 7" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"
                      d="M5 13l4 4L19 7"/>
                <path x-show={password.length < 7} stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"/>

            </svg>
        </div>
        <span class={`text-green-700: password.length > 7 'text-red-700':password.length < 7 `}
              class="font-medium text-sm ml-3"
              x-text={`${password.length > 7 ? 'The minimum length is reached' : 'At least 8 characters required'}`}></span>
    </li>
</ul>
</div> */}
