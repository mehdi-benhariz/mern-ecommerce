import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logOut } from "../api/UserApi";
import { getPannelItems } from "../utils/Cache";

const NavBar = () => {
  const { isLogged, update, isAdmin } = useContext(AuthContext);
  const [expanded, setexpanded] = useState(false);
  const [selectedElt, setSelectedElt] = useState(false);
  const [pannelItems, setPannelItems] = useState(0);
  const categories = ["clothes", "electronic", "food"];
  console.log(window.localStorage.getItem("pannelItems"));
  useEffect(() => {
    setPannelItems(getPannelItems());
  }, []);

  return (
    <nav className="bg-white shadow mb-28 " role="navigation">
      <div
        className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap"
        onBlur={() => !selectedElt && setexpanded(false)}
      >
        <div className="mr-4 md:mr-8">
          <a href="/" rel="home">
            <svg
              className="w-10 h-10 text-purple-600"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>E-Commerce</title>
              <path
                fill="currentColor"
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
              ></path>
            </svg>
          </a>
        </div>
        <div class="ml-auto md:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded"
            type="button"
          >
            <svg
              class="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
            <li>
              {isLogged && (
                <span>
                  {isAdmin ? (
                    <Link
                      class="block px-4 py-1 md:p-2 lg:px-4 font-meduim text-xl text-gray-500 
          transform ease-linear  nav-item"
                      to="/adminPage"
                      title="Link"
                    >
                      Admin Page
                    </Link>
                  ) : (
                    <Link
                      class="block px-4 py-1 md:p-2 lg:px-4 font-meduim text-xl text-gray-500  
          transform ease-linear nav-item "
                      to="/pannel"
                      title="Link"
                    >
                      <span>Pannel</span>
                      {pannelItems > 0 && (
                        <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                          {pannelItems}
                        </span>
                      )}
                    </Link>
                  )}
                </span>
              )}
            </li>

            <li>
              <a
                className="block px-4 py-1 md:p-2 lg:px-4 font-meduim text-xl text-gray-500 hover:text-gray-800 
          transform ease-linear hover:border-b-2 border-gray-800"
                href="/"
                title="Link"
              >
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={(e) => {
                        e.preventDefault();
                        setexpanded(!expanded);
                      }}
                    >
                      Categories
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {expanded && (
                    <div className="origin-top-right absolute left-32 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        ariaOrientation="vertical"
                        ariaLabelledby="options-menu"
                      >
                        {categories.map((e) => {
                          return (
                            <li
                              key={e}
                              //this is to determine if the mouse if over an element or not
                              onMouseOver={() => setSelectedElt(true)}
                              onMouseLeave={() => setSelectedElt(false)}
                            >
                              <Link
                                to={`/product/categorie/${e}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                {e}
                              </Link>
                            </li>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </a>
            </li>
          </ul>{" "}
          <ul className="flex flex-col  mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            {isLogged ? (
              <li className="ml-4 ">
                <button
                  className="block px-4 py-1 md:p-2 lg:px-4  bg-gray-500 rounded text-white font-meduim text-xl 
hover:bg-transparent  hover:text-gray-500 transform ease-in-out duration-200  "
                  title="Link"
                  onClick={() => {
                    logOut();
                    update();
                  }}
                >
                  Log Out
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    {" "}
                    <span
                      className="block px-4 py-1 md:p-2 lg:px-4 font-meduim text-xl text-gray-500 
      border-r-2 "
                      title="Link"
                    >
                      Login
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <span
                      className="block px-4 py-1 md:p-2 lg:px-4 font-meduim text-xl text-gray-500 "
                      title="Link"
                    >
                      Register
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
