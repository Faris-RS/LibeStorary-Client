import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private service: AuthenticationService) {}

  ngOnInit(): void {
    this.getSample();
  }

  getSample() {
    // this.service.sample().subscribe((result) => {
    //   console.log('got output');
    // });
  }
}
