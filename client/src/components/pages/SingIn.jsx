import { useState, useContext } from "react";
import { Link ,useHistory} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { API } from "../Api";
axios.defaults.withCredentials = true

const SignIn = () => {

  const [user, setuser] = useState({ email: "", password: "" });
  const [error, seterror] = useState(null);
  const { isLogged,setisLogged } = useContext(AuthContext);
   let history = useHistory()
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await API.login(user);
    if(res.data.success){
    const state = await API.getUserInfo();
    setisLogged(state.isLogged)
    history.push('/')
  }else{
    seterror(res.data)
  }
    //   switchAuth()
  };

  return (
    <div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign in
            </h1>
            <p class="text-gray-500 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <div class="m-7">
            <form action="">
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  class="w-full px-3 py-2 
                        placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring 
                        focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 
                        dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  onChange={(e) => setuser({ ...user, email: e.target.value })}
                />
              </div>
              <div class="mb-6">
                <div class="flex justify-between mb-2">
                  <label
                    for="password"
                    class="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Password
                  </label>
                  <a
                    href="#!"
                    class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md 
                        focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 
                        dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 
                        dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  onChange={(e) =>
                    setuser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div class="mb-6">
                <button
                  type="button"
                  class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md 
                        focus:bg-indigo-600 focus:outline-none"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
              </div>
              <p class="text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?
                <Link to="/register">
                  <a
                    class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500
                     dark:focus:border-indigo-800"
                  >
                    Sign up
                  </a>
                </Link>
                .
              </p>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
