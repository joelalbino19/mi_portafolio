import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { InicioComponent } from "./inicio/inicio.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProyectsComponent } from "./proyects/proyects.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterModule, HeaderComponent, InicioComponent, HeroComponent, AboutComponent, SkillsComponent, ProyectsComponent, ServicesComponent, ContactComponent, FooterComponent],
})
export class AppComponent {
  title = 'Ender Padilla';
}
