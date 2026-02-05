import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [CommonModule],
})

export class HeaderComponent {

  activeSection = 'home';
  isScrolled = false;
  links = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'services', label: 'Servicios' },
    { id: 'contact', label: 'Contacto' },
  ];

  private lastScrollY = 0;

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;
    // Transparencia
    this.isScrolled = currentScroll > 20;
    this.lastScrollY = currentScroll;
  }

  ngAfterViewInit(): void {
    this.initScrollSpy();
  }

  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  private initScrollSpy() {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    sections.forEach(section => observer.observe(section));
  }

}

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const current = window.scrollY;

  gsap.to(header, {
    y: current > lastScroll && current > 120 ? -100 : 0,
    duration: 0.4,
    ease: 'power2.out'
  });

  lastScroll = current;
});