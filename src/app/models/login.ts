export class Login {
    userCredentialId: string;
    password: string;
    userType: string;
    loginStatus: Date;
  
    setFields({ usercredentialId, password, userType, loginStatus }: any) {
      this.userCredentialId = usercredentialId;
      this.password = password;
      this.userType = userType;
      this.loginStatus = loginStatus;
    }
  }
  