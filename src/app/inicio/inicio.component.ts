import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
  standalone: true,
  imports: [],
})
export class InicioComponent {

  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power3.out',
      },
    });

    tl.from('.gsap-item', {
      opacity: 0,
      y: 30,
      stagger: 0.12,
    });

    tl.from(
      '.gsap-visual',
      {
        opacity: 0,
        y: 40,
      },
      '-=0.4'
    );
  }

}
