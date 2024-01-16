
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  public userDetails:any
  constructor(private _activatedRoute: ActivatedRoute , private socialAuthService: SocialAuthService, private router:Router) { }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('user:session') as string);
  }


  public signout(): void {
    this.userDetails = ''
    // this.socialAuthService.signOut();
    localStorage.clear();
    this.router.navigate(['/']);  
  }
}
