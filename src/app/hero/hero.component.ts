import { AfterViewInit, Component, ElementRef } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  standalone: true,
  imports: [],
})
export class HeroComponent {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const section = this.el.nativeElement.querySelector('.gsap-section');
    const items = section.querySelectorAll('.gsap-item');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.from(items, {
            scrollTrigger: {
              trigger: section,
              start: 'top bottom', // 👈 clave
              toggleActions: 'play none none none',
              once: false,
            },
            opacity: 0,
            y: 30,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
          });
          observer.unobserve(section); // solo una vez
        }
      },
      {
        threshold: 0.3, // 30% visible
      }
    );
    observer.observe(section);
  }

  

}
