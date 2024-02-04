import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './style.css'

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/getNonStaffUsers");
      setData(response.data);
      setIsLoading(false); // Set isLoading to false when data is loaded
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false); // Handle the error and still set isLoading to false
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <div id="loader"></div>
        </div>
      ) : (
        <main>
          <div>
            <h1>User List</h1>
            <ul>
              {data.map((user) => (
                <li key={user._id}>
                  <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Phone:</strong> {user.phone}
                </li>
              ))}
            </ul>
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
