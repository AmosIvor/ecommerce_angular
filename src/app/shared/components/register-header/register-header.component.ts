import { Component } from '@angular/core'
import { Router, RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-register-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './register-header.component.html',
  styleUrl: './register-header.component.css'
})
export class RegisterHeaderComponent {
  isRegisterRouter: boolean = false

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isRegisterRouter = this.router.url === '/register'
    })
  }
}
