import { Component, OnInit } from '@angular/core';
import { DashBoardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  public platformData: any;

  constructor(private httpService: DashBoardService, private router: Router) { }
  title = 'dataCombinationApp';

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.httpService.getPlatformData().subscribe( data => {
      this.platformData = data;
      this.platformData = this.platformData.platforms
    });
  }

  public navigateToNext(URL: string) {
    this.router.navigateByUrl('/'+URL);
  }
}
