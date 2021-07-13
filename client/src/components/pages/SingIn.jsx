import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login, getUserInfo } from "../api/UserApi";
import { setPannelItems } from "../utils/Cache";
//works fine
const SignIn = () => {
  const [user, setuser] = useState({ email: "", password: "" });
  const [error, seterror] = useState([]);
  const { setisLogged, update } = useContext(AuthContext);

  let history = useHistory();
  const handleLogin = async (e) => {
    const res = await login(user);
    console.log({ res });
    if (res?.data?.errors) {
      seterror(res.data.errors);
      console.log(res.data.errors);
    } else {
      history.push("/");
      const state = await getUserInfo();
      setisLogged(state.isLogged);
      setPannelItems(res.data.message.pannelProducts.length);
      update();
    }
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
                  onChange={(e) => {
                    seterror([]);
                    setuser({ ...user, email: e.target.value });
                  }}
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
                  onChange={(e) => {
                    seterror([]);
                    setuser({ ...user, password: e.target.value });
                  }}
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
              <div>
                {error.map((e, i) => {
                  return (
                    <p
                      key={i}
                      class="no-underline text-red-600 mb-2 inline-flex items-center rounded-full border border-grey-light bg-red-200 text-xs 
          pl-1 pt-1 pb-1 pr-2 leading-none mr-2 font-bold p-4"
                    >
                      <span class="inline-flex rounded-full bg-green-light text-red-600 mr-1 font-bold">
                        X
                      </span>{" "}
                      <span>
                        {Object.keys(e)[0]} {Object.values(e)[0]}{" "}
                      </span>
                    </p>
                  );
                })}
              </div>

              <p class="text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?
                <Link to="/register">
                  <p
                    class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500
                     dark:focus:border-indigo-800"
                  >
                    Sign up
                  </p>
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
