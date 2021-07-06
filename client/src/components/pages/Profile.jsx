import React, { useEffect, useState } from "react";
import { getProfile } from "../api/UserApi";

const Profile = () => {
  const [newUser, setNewUser] = useState({});
  const fetchProfile = async () => {
    const res = await getProfile();
    if (res?.status === 200) setNewUser(res.data.user);
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  const setField = (e, field) => {
    setNewUser({ ...newUser, field: e.target.value });
  };
  //TODO move the repeated style into another file
  const input = `bg-gray-200 rounded-full px-3 py-1 hover:shadow-xl transform ease-linear duration-150 
    focus:bg-white border-transparent focus:border-purple-400 border-2 outline-none w-full mb-2 mr-4`;
  const labelText = `text-lg font-medium text-gray-700`;
  return (
    <div className="">
      <div className="grid grid-rows-5 grid-cols-3 bg-white rounded shadow-md mb-4 mx-2 p-3">
        <div className="md:col-span-1 md:row-span-5 col-span-3">
          <div className="row-span-4">
            <img src={"user-profile.png"} alt="profile" />
          </div>
          <div className="row-span-1">
            <button className="bg-green-450 text-xl text-white font-medium rounded px-4 py-2 hover:bg-green-600">
              Save changes
            </button>
          </div>
        </div>
        <div className="md:col-span-2 row-span-5 col-span-3">
          <div className="">
            <div className="p-2 grid grid-cols-2">
              <div className="pr-2">
                <label className={labelText}>Name</label>
                <input
                  value={newUser.name}
                  className={input}
                  type="text"
                  onChange={(e) => setField(e, "name")}
                />
              </div>
              <div className="pl-2">
                <label className={labelText}>Phone</label>
                <input
                  value={newUser.phone}
                  className={input}
                  type="text"
                  onChange={(e) => setField(e, "phone")}
                />
              </div>
            </div>
            <div className="p-2">
              <label className={labelText}>Email</label>
              <input
                value={newUser.email}
                className={input}
                type="text"
                onChange={(e) => setField(e, "email")}
              />
            </div>

            <div className="p-2">
              <label className={labelText}>Adress</label>
              <input
                value={newUser.name}
                className={input}
                type="text"
                onChange={(e) => setField(e, "adress")}
              />
            </div>
            <div className="p-2">
              <label className={labelText}>Gender</label>
              <input
                value={newUser.gender}
                className={input}
                type="text"
                onChange={(e) => setField(e, "gender")}
              />
            </div>
          </div>
          <div className="row-span-4 col-span-2">
            <button className="col-span-1 mx-2 bg-purple-400 text-xl text-white font-medium rounded px-4 py-2 hover:bg-purple-600">
              See your pannel
            </button>
            <button className="col-span-1 mx-2 bg-yellow-400 text-xl text-white font-medium rounded px-4 py-2 hover:bg-yellow-600">
              give us feedback{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
