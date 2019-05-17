import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorageService';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface IUser {
  id?: string;
  username?: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = { username: '' , password: '' };
  localStorageService: LocalStorageService<IUser>;
  currentUser: IUser = null;
  constructor(private router: Router, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('user');
  }

  ngOnInit() {
    this.currentUser = this.localStorageService.getItemsFromLocalStorage();
    console.log('this.currentUser....', this.currentUser);
    this.router.navigate([]);
  }

  login(user: IUser) {
    console.log('from login user: ', user);
    const defaultUser: IUser = { username: 'jonathan', password: 'garcia123' };
    if (user.username != null && user.password != null) {
      if (user.username === defaultUser.username && user.username === defaultUser.password) {
        // log the user in
        // store user in localstorage
        this.localStorageService.saveItemsToLocalStorage(user);
        // navigate to contacts page
        this.router.navigate(['contacts', user]);
      } else {
            // show error toast user
        this.toastService.showToast('danger', 15000, 'Login failed! Please check your username or password');
      }
    } else {
      this.toastService.showToast('danger', 15000, 'Login failed! Please specify username or password');

    }
  }


}
