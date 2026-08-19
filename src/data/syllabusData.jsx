
export const syllabusData = [
  {
    id: 1,
    module: "Module 01",
    title: "Frontend Foundations",
    shortTitle: "Frontend Foundations",
    description:
      "Master the building blocks of the modern web: semantic markup, responsive styling, and production-grade JavaScript.",
    projects: "10+",
    months: "01",
    topics: [
      {
        number: "01",
        title: "HTML & Browser Rendering",
        points: [
          "Semantic HTML: Header, Main, Section, Article, Aside, Footer and structuring documents for clarity and scale.",
          "The Browser Rendering Pipeline: HTML Parsing → CSSOM → Render Tree → Layout → Paint, and optimizing Reflow vs. Repaint.",
          "Accessibility & SEO: ARIA Roles, inclusive design, and search-friendly semantic structure.",
          "Forms & Content Modeling: Input types, validation fundamentals, lists, navigation, and responsive images.",
        ],
      },
      {
        number: "02",
        title: "CSS Architecture & Layouts",
        points: [
          "Advanced CSS: Custom properties, grid, flexbox layout architectures for high-end responsive systems.",
          "TailwindCSS v4: Theme extensions, custom utility creation, and build optimization workflows.",
          "Animations: Smooth transitions, keyframe animations, and scroll-linked micro-animations.",
        ],
      },
    ],
  },

  {
    id:2,
    module: "Module 02",
    title: "React & Next.js",
    shortTitle: "React & Next.js",
    description:
      "Build dynamic, SEO-friendly React web applications with Next.js App Router, SSR, Server Components, and client-side states.",
    projects: "10+",
    months: "01",
    topics: [
      {
        number: "01",
        title: "React Core Concepts",
        points: [
          "React Hook architectures: useState, useEffect, useMemo, useCallback, and custom hooks.",
          "State Management: Context API, Zustand, and structured prop-drilling patterns.",
          "Performance tuning: Profiling renders, lazy loading, and virtualization for long lists.",
        ],
      },
      {
        number: "02",
        title: "Next.js App Router",
        points: [
          "React Server Components (RSC) and Client Components boundaries.",
          "Data Fetching: Server-side rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR).",
          "Routing: Dynamic route parameters, layout nesting, and loading/error states.",
        ],
      },
    ],
  },

  {
    id:3,
    module: "Module 03",
    title: "Backend Engineering with Node, Express & MongoDB",
    shortTitle: "Backend Engineering with Node, Express & MongoDB",
    description:
      "Design scalable REST APIs, secure authentication flows, and manage SQL and NoSQL database schemas.",
    projects: "8+",
    months: "01",
    topics: [
      {
        number: "01",
        title: "REST API Design & Node Core",
        points: [
          "Node.js asynchronous event loop, event emitters, streams, and file system operations.",
          "Express middleware architecture: Request/response pipeline, global error handlers, and validation layers.",
          "Security: JWT authentication, bcrypt password hashing, CORS, rate-limiting, and Helmet integration.",
        ],
      },
      {
        number: "02",
        title: "Database Design with MongoDB",
        points: [
          "Data Modeling: Mongoose schemas, relationships, indexing, and aggregations.",
          "Transactions: Implementing ACID operations across multiple document collections.",
          "Migration: Strategy for database updates, backups, and staging deployments.",
        ],
      },
    ],
  },

  {
    id:4,
    module: "Module 04",
    title: "DevOps, Cloud & Deployment",
    shortTitle: "DevOps, Cloud & Deployment",
    description:
      "Deploy applications with Docker, Kubernetes, CI/CD pipelines, and configure secure hosting on AWS/GCP.",
    projects: "03+",
    months: "01",
    topics: [
      {
        number: "01",
        title: "Containerization & Orchestration",
        points: [
          "Docker: Creating multi-stage Dockerfiles, caching image layers, and docker-compose configurations.",
          "Kubernetes: Deployments, Services, Ingress controllers, and persistent volume claims.",
        ],
      },
      {
        number: "02",
        title: "CI/CD Pipelines & AWS Cloud",
        points: [
          "GitHub Actions: Automation, automated unit testing, static analysis, and deploy triggers.",
          "AWS Deployments: Configuring VPCs, EC2 instances, S3 storage buckets, and CloudFront CDN routing.",
        ],
      },
    ],
  },

  {
    id:5,
    module: "Module 05",
    title: "Scaling, Reliability & Microservices",
    shortTitle: "Scaling, Reliability & Microservices",
    description:
      "Implement message brokers, caching with Redis, system load balancing, and break down monoliths into microservices.",
    projects: "02+",
    months: "01",
    topics: [
      {
        number: "01",
        title: "Caching & Message Queues",
        points: [
          "Redis: Data caching, session stores, pub/sub communication, and rate limiting.",
          "RabbitMQ & Kafka: Implementing asynchronous message brokers for decoupled service communications.",
        ],
      },
      {
        number: "02",
        title: "Microservices & System Performance",
        points: [
          "Gateway architectures: API Gateways, reverse proxies, and routing requests.",
          "System Design: Horizontal scaling, load balancing with NGINX, and database sharding principles.",
        ],
      },
    ],
  },
];