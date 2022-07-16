import React from 'react';
import * as S from './style'

const Profile = () => {
    return <S.Wrapper>
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
    </S.Wrapper>;
    
};

export default Profile;
