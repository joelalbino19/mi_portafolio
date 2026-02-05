import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  
  @ViewChildren('Card', { read: ElementRef })
  cards!: QueryList<ElementRef>;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const bars = this.el.nativeElement.querySelectorAll('.progress');

    gsap.fromTo(
      bars,
      { width: 0 },
      {
        width: (i, target: HTMLElement) => target.dataset['width'] + '%',
        duration: 2.5,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 75%',
          once: true
        }
      }
    );

    this.animateCards();
    this.initTiltEffect();
  }

  /* 🔹 Animación con ScrollTrigger */
  animateCards() {
    gsap.from('.skills_card', {
      scrollTrigger: {
        trigger: '.skills_cards',
        start: 'top 80%',
      },
      opacity: 0,
      y: 80,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2
    });
  }

  /* 🔹 Efecto Tilt 3D */
  initTiltEffect() {
    const cards = document.querySelectorAll('.skills_card');

    cards.forEach((card: any) => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        gsap.to(card, {
          rotateX,
          rotateY,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.4,
          ease: 'power3.out'
        });
      });
    });
  }


}
