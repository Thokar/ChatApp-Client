import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireBaseUserModel } from '../models/firebaseUserModel.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit 
{
  user: FireBaseUserModel = new FireBaseUserModel();
  profileForm: FormGroup;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    //private location: Location,
    private fb: FormBuilder

  ) {
    console.log('constructor User Component');
   }

  ngOnInit(): void 
  {
    console.log('ngOnInit User Component');

    this.route.data.subscribe(routeData => {
      let data = routeData['data'];

      if (data)
      {
        this.user = data;
        this.createForm(this.user.name);
      }
    });
  }

  createForm(name)
  {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value)
  {
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}
