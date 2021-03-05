import { useState, useContext } from "react";
import { API } from "../Api";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, seterror] = useState([]);
  const { setisLogged, update } = useContext(AuthContext);
  let history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await API.register(user);

    if (res.data?.errors) {
      seterror(res.data.errors);
      console.log(res.data.errors);
    } else {
      let newUser = { email: user.email, password: user.password };
      API.login(newUser);
      const state = await API.getUserInfo();
      setisLogged(state.isLogged);
      update();
      history.push("/");
    }
  };
  return (
    <div class="container max-w-full mx-auto md:py-24 px-6 bg-gray-200 ">
      <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
          <div class="w-full relative">
            <div class="md:mt-6">
              <div class="text-center font-semibold text-black">Register</div>
              <div class="text-center font-base text-black">
                SignUp to get an account
              </div>
              <form class="mt-8" x-data="{password: '',password_confirm: ''}">
                <div class="mx-auto max-w-lg ">
                  <div class="py-1">
                    <span class="px-1 text-sm text-gray-600">Username</span>
                    <input
                      placeholder=""
                      type="text"
                      class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 
                                       placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white 
                                       focus:border-gray-600 focus:outline-none"
                      onChange={(e) => {
                        seterror([]);
                        setuser({ ...user, name: e.target.value });
                      }}
                    />
                  </div>
                  <div class="py-1">
                    <span class="px-1 text-sm text-gray-600">Email</span>
                    <input
                      placeholder=""
                      type="email"
                      class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 
                focus:bg-white focus:border-gray-600 focus:outline-none"
                      onChange={(e) => {
                        seterror([]);
                        setuser({ ...user, email: e.target.value });
                      }}
                    />
                  </div>
                  <div class="py-1">
                    <span class="px-1 text-sm text-gray-600">Password</span>
                    <input
                      placeholder=""
                      type="password"
                      x-model="password"
                      class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300
                                        placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white 
                                        focus:border-gray-600 focus:outline-none"
                      onChange={(e) => {
                        seterror([]);
                        setuser({ ...user, password: e.target.value });
                      }}
                    />
                  </div>
                  <div class="py-1">
                    <span class="px-1 text-sm text-gray-600">
                      Password Confirm
                    </span>
                    <input
                      placeholder=""
                      type="password"
                      x-model="password_confirm"
                      class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 
                                       placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white 
                                       focus:border-gray-600 focus:outline-none"
                      onChange={(e) => {
                        seterror([]);
                        setuser({
                          ...user,
                          password_confirmation: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <button
                    class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                    onClick={handleRegister}
                  >
                    Register
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
              </form>

              <div class="text-sm font-semibold block sm:hidden py-6  justify-center">
                <p class="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500">
                  You're already member?
                  <span class="text-black font-semibold">Login</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
