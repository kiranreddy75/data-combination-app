import { Component, OnInit } from '@angular/core';
import { DashBoardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userData: any;
  public dazzlesphereProfile : string;
  public yaboxProfile : string;
  public kwideoProfile : string;

  constructor(private httpService: DashBoardService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.httpService.getUserData().subscribe( data => {
      this.userData = data;
    });
  }

  public navigateToNext() {
    this.router.navigateByUrl('/');
  }

  public deleteUserData(id: string) {
    this.httpService.deleteUserData(id).subscribe(() => {window.location.reload()});
  }

  public setProfileData(profile) {
    this.dazzlesphereProfile = profile["shared_on_platform_1"];
    this.yaboxProfile = profile["shared_on_platform_2"];
    this.kwideoProfile = profile["shared_on_platform_3"];
  }
}
