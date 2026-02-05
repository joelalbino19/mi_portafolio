import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ContactService } from '../services/contact.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactComponent {
  @ViewChild('section', { static: true }) section!: ElementRef;

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
  ) {
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['',],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }

  /* =======================
    FORM
  ======================= */
  initForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  sendEmail(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData = {
      name: this.contactForm.value.name,
      lastname: this.contactForm.value.lastname,
      email: this.contactForm.value.email,
      company: this.contactForm.value.company,
      phone: this.contactForm.value.phone,
      message: this.contactForm.value.message,
      year: new Date().getFullYear(),
    };

    this.contactService
      .sendContact(formData)
      .then(() => {
        this.contactForm.reset();
      })
      .catch(() => {
      });
  }

  sendWhatsApp() {
    if (this.contactForm.invalid) return;

    const { name, email, message } = this.contactForm.value;

    const text = encodeURIComponent(
      `Hola, soy ${name}. Mi email es ${email}. ${message}`,
    );

    window.open(`https://wa.me/573148625120?text=${text}`, '_blank');
  }

  /* =======================
    ANIMATIONS
  ======================= */
  initAnimations() {
    const ctx = gsap.context(() => {
      gsap.from('.contac-header', {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
        },
      });

      gsap.from('.info > *', {
        opacity: 0,
        x: -50,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.content',
          start: 'top 75%',
        },
      });

      gsap.from('.form', {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: '.content',
          start: 'top 75%',
        },
      });
    }, this.section);

    return () => ctx.revert();
  }
}
