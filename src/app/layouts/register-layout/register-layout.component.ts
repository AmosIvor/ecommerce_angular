import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from '@components/footer/footer.component'
import { RegisterHeaderComponent } from '@components/register-header/register-header.component'

@Component({
  selector: 'app-register-layout',
  imports: [RouterOutlet, RegisterHeaderComponent, FooterComponent],
  templateUrl: './register-layout.component.html',
  styleUrl: './register-layout.component.css'
})
export class RegisterLayoutComponent {}
