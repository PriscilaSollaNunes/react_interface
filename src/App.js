import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";

const App  = () => {
  return (
  <main>
    <Layout>
    <img src="https://avatars.githubusercontent.com/u/104384260?v=4" 
            alt="Avatar of user"/>
            <h1>Priscila Solla</h1>
            <h3>Username: </h3>
            <spam>Solla</spam>
            <div>
              <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </div>
    <div>Repositories</div>
    <div>Starreds</div>
    </Layout> 
  </main>
  );
};

export default App;
