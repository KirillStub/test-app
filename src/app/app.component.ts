import {Component, OnInit} from '@angular/core';
import {CognitoUserPool, CognitoUserAttribute, CognitoUser} from 'amazon-cognito-identity-js';
import {UserPoolClient} from './cognito';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userPool: CognitoUserPool;
  phone: string;
  email: string;
  password: string;
  error: string;
  code: string;
  needConfirm = false;

  constructor() {
  }

  ngOnInit() {
    this.userPool = new CognitoUserPool(UserPoolClient);
  }

  signUp() {
    this.error = '';
    const attributeList = [];
    const attributePhoneNumber = new CognitoUserAttribute({
      Name: 'phone_number',
      Value: this.phone
    });
    const attributeEmail = new CognitoUserAttribute({
      Name: 'email',
      Value: this.email
    });

    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeEmail);

    this.userPool.signUp(this.phone, this.password, attributeList, null, (err, result) => {
      if (err) {
        this.error = err.message || JSON.stringify(err);
        return;
      }
      this.needConfirm = true;
    });
  }

  confirm() {
    this.error = '';
    const userData = {
      Username: this.phone,
      Pool: this.userPool
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(this.code, true, (err, result) => {
      if (err) {
        this.error = err.message || JSON.stringify(err);
        return;
      }
      alert(result);
    });
  }
}
