export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tech: any;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: 'fa-code',
    title: 'Desarrollo Web Full Stack',
    description:
      'Aplicaciones web modernas, rápidas y responsivas (SPA/PWA) que mejoran la retención y experiencia del usuario final.',
    tech: ['Angular', 'Node.Js', 'Express', 'Firebase', 'SQL Server']
  },
  {
    icon: 'fa-cloud',
    title: 'Infraestructura Cloud',
    description:
      'Arquitecturas seguras y escalables en AWS/Azure diseñadas para reducir costos operativos y mejorar disponibilidad.',
    tech: ['AWS', 'Oracle', 'Docker']
  },
  {
    icon: 'fa-project-diagram',
    title: 'Diseño de APIs',
    description:
      'Integración de sistemas complejos mediante APIs RESTfull y GraphQL robustas, seguras y bien documentadas.',
    tech: ['Node.Js', 'Express', 'Python']
  },
  {
    icon: 'fa-user-cog',
    title: 'Consultoría Técnica',
    description:
      'Auditoría de código, refactorización estratégica y mentoría para optimizar procesos y elevar el nivel de equipos de desarrollo.',
    tech: ['Arquitectura', 'Agile', 'Seguridad']
  },
  {
    icon: 'fa-solid fa-mobile',
    title: 'Diseño adaptativo & Móvil',
    description:
      'Garantizo una experiencia de usuario impecable en cualquier dispositivo. Desarrollo aplicaciones multiplataforma (Web, IOS, Android).',
    tech: ['Flutter', 'Node.Js', 'Express', 'Firebase', 'SQL Server', 'PostgreSQL']
  },
  {
    icon: 'fa-infinity',
    title: 'DevOps & CI/CD',
    description:
      'Implementación de pipelines de automatización para despliegues continuos, testing y aceleración del ciclo de vida del software.',
    tech: ['AWS/Azure', 'Oracle', 'Docker', 'CI/CD']
  }
];
