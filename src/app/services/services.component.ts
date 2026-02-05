import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  ViewChild
} from '@angular/core';

import { SERVICES, ServiceItem } from './services.data';
import { CommonModule } from '@angular/common';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class ServicesComponent {

  services: ServiceItem[] = SERVICES;

  @ViewChild('rocket', { static: true }) rocket!: ElementRef;
  @ViewChildren('serviceCard') cards!: QueryList<ElementRef>;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    gsap.from(this.el.nativeElement, {
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 80%'
      },
      opacity: 0,
      y: 60,
      scale: 0.98,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.fromTo(
      this.rocket.nativeElement,
      {
        x: '-60vw'
      },
      {
        x: '60vw',
        ease: 'none',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top bottom',     // entra a viewport
          end: 'bottom top',       // sale completamente
          scrub: true,             // 🔥 EL SECRETO
          invalidateOnRefresh: true
        }
      }
    );

    this.animateCards();
  }

  private animateCards(): void {
    this.cards.forEach((card, index) => {
      gsap.from(card.nativeElement, {
        scrollTrigger: {
          trigger: card.nativeElement,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.08
      });
    });
  }

}
