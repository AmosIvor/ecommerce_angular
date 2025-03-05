import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-register-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './register-header.component.html',
  styleUrl: './register-header.component.css'
})
export class RegisterHeaderComponent {}
