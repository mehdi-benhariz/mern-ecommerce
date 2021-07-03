const UsersDataTable = ({ data }) => {
  let exist = data.length > 0;
  console.log(exist, data.length);
  return (
    <div class="bg-white rounded shadow-lg mt-3 p-2">
      {exist ? (
        <div>
          <h3 class="text-2xl text-gray-700 font-semibold">clients:</h3>
          {/* <table class="grid grid-cols-4">
            <th>Name</th>
            <th>Registration date</th>
            <th>gender</th>
            <th>delete?</th>
          </table> */}
          <table>
            <thead>
              <tr>
                <th>Pic</th>
                <th>Name</th>
                <th>Registration date</th>
                <th>gender</th>
                <th>adress</th>
                <th>delete?</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => {
                console.log(user);
                return (
                  <tr key={user._id}>
                    <td>
                      <span>Pic</span> <img src="" />
                    </td>
                    <td>
                      <span>Name</span>
                      {user.name}
                    </td>
                    <td>
                      <span>Registration date</span>{" "}
                      {new Date(user.date).toLocaleDateString()}
                    </td>
                    <td>
                      <span>gender</span> {user.gender}
                    </td>
                    <td>
                      <span>adress</span> {user.adress}
                    </td>
                    <td>
                      <span> delete</span>{" "}
                      <button className="hover:bg-white hover:text-red-500 hover:border-red-500 border-2 ease-linear duration-200 w-4/5 rounded bg-red-500 text-xl px-6 text-white font-semibold ">
                        X{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-2xl text-gray-700 font-semibold">
          sorry there are no users yet...{" "}
        </p>
      )}
    </div>
  );
};

export default UsersDataTable;
