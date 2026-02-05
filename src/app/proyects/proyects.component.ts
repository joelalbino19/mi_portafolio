import { CommonModule } from '@angular/common';
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

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class ProyectsComponent {

  @ViewChildren('projectCard', { read: ElementRef })
  cards!: QueryList<ElementRef>;

  projects = [
    {
      title: 'Dashboard Financiero Pro',
      description: 'Plataforma de gestión financiera en tiempo real para PYMES.',
      image: 'assets/images/dashboard.jpg',
      tech: ['Angular', 'Node.js', 'SQL Server']
    },
    {
      title: 'TaskFlow Mobile',
      description: 'Aplicación móvil multiplataforma para la gestión de equipos de productividad. Incluye sincronización offline, chat en tiempo real, notificaciones, carga y descarga de archivos.',
      image: 'assets/images/taskflow_movil.jpg',
      tech: ['Flutter', 'Firebase', 'Node.Js', 'Express']
    },
    {
      title: 'E-Commerce Microservices',
      description: 'Arquitectura de backend distribuida para plataforma de comercio electrónico de alto tráfico.',
      image: 'assets/images/e_commerce.jpg',
      tech: ['Node.js', 'Express', 'Docker']
    },
    {
      title: 'Sistema de Gestión ERP',
      description: 'Plataforma integral SaaS para gestión de inventarios, RRHH y facturación automatizada. Diseñada para escalar a miles de transacciones diarias.',
      image: 'assets/images/sistema_erp.jpg',
      tech: ['Angular', 'DevExpress', 'Node.js', 'Express', 'SQL Server', 'Docker']
    },
    {
      title: 'Sistema de Reconocimiento Facial',
      description: 'Plataforma empresarial de autenticación biométrica con procesamiento en tiempo real y alta precisión para control de acceso.',
      image: 'assets/images/reconocimiento_facial.jpg',
      tech: ['Angular', 'Node.js', 'Express', 'Python', 'SQL Server', 'Docker']
    },
    {
      title: 'Fintechs',
      description: 'Plataforma digital que permite solicitar créditos de forma rápida, segura y 100% en línea, simplificando el acceso a financiamiento con procesos ágiles y decisiones eficientes.',
      image: 'assets/images/fintech.png',
      tech: ['React', 'Node.js', 'Nest', 'Mongo DB', 'Git', 'Trello', 'Postman'] 
    },
    {
      title: 'Cloud Administrativo',
      description: 'Plataforma en la nube para la gestión centralizada, segura y eficiente de datos de clientes, optimizando los procesos administrativos y operativos',
      image: 'assets/images/cloud.png',
      tech: ['Flutter', 'Node.js', 'express', 'Mongo DB', 'Git', 'Trello', 'Postman']
    } 
  ];

  ngAfterViewInit(): void {
    // this.animateCards();
    // this.initTiltEffect();
  }

  /* 🔹 Animación con ScrollTrigger */
  animateCards() {
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
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
    const cards = document.querySelectorAll('.project-card');

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
