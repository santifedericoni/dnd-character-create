import React, { Component } from 'react';
import axios from 'axios';

class newUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Create a new user',
    };
  }

  fetchData = () => {
    axios({
      method: 'post',
      url: '/api/user',
      data: {
        name: 'santi',
        nick_name: 'santy87',
        email: 'santi@santi.com',
        password: 'asdasd',
      },
      validateStatus: (status) => {
        return true;
      },
    })
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        console.log(response);
      });
  };

  //   let name = 'santy';
  //   let nick_name = 'santy';
  //   let email = 'aasd';
  //   let password = 'asdasd';

  //   const user = {
  //     name,
  //     nick_name,
  //     email,
  //     password,
  //   };

  //   axios.post(`/api/user`, data: {user})
  //   .then((res) => {
  //     console.log('hi', res);
  //   });
  // };
  render() {
    return (
      <div className="newUser">
        <h1>{this.state.message}</h1>
        <button onClick={this.fetchData}>Create</button>
      </div>
    );
  }
}
export default newUser;

// const newUser = () => {
//     return (
//       <form>
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//     )
// }

// export default newUser;
