import { Component } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
  imports: [],
})
export class AboutComponent {

  ngAfterViewInit(): void {
    this.initAnimations();
    this.initTiltGSAP();
  }

  private initAnimations(): void {

    // Header
    gsap.from('.animate-header', {
      scrollTrigger: {
        trigger: '.animate-header',
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      duration: 1.5,
      ease: 'power3.out',
    });

    // Texto
    gsap.from('.animate-text', {
      scrollTrigger: {
        trigger: '.animate-text',
        start: 'top 80%',
      },
      opacity: 0,
      x: -40,
      duration: 1.7,
      ease: 'power3.out',
    });

    // Imagen
    gsap.from('.animate-image', {
      scrollTrigger: {
        trigger: '.animate-image',
        start: 'top 80%',
      },
      opacity: 0,
      scale: 0.95,
      duration: 1.9,
      ease: 'power3.out',
    });

    // Tech stack (stagger)
    gsap.from('.animate-tech span', {
      scrollTrigger: {
        trigger: '.animate-tech',
        start: 'top 85%',
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1.5,
      ease: 'power2.out',
    });

    // Stats
    gsap.from('.animate-stats .stat', {
      scrollTrigger: {
        trigger: '.animate-stats',
        start: 'top 85%',
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 1.7,
      ease: 'power3.out',
    });
  }

  private initTiltGSAP(): void {
    
    if (window.innerWidth < 1024) return;

    const cards = document.querySelectorAll<HTMLElement>('.tilt');

    cards.forEach(card => {
      const maxTilt = 10;

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rx = ((y / rect.height) - 0.5) * -maxTilt;
        const ry = ((x / rect.width) - 0.5) * maxTilt;

        gsap.to(card, {
          rotateX: rx,
          rotateY: ry,
          y: -6,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          y: 0,
          duration: 0.5,
          ease: 'power3.out'
        });
      });
    });
  }

}