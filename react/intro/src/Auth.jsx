import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isDownload: false,
    };
  }

  loginHandler = () => {
    this.setState({ isLoggedIn: true, isDownload: true });

    setTimeout(() => {
      this.setState({ isDownload: false });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="panel">
        {this.state.isDownload ? (
          <Spinner size={50} />
        ) : this.state.isLoggedIn ? (
          <Logout onLogout={this.logoutHandler} />
        ) : (
          <Login onLogin={this.loginHandler} />
        )}
      </div>
    );
  }
}

export default Auth;
