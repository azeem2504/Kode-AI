# 🚀 Kode AI – Build with Vibe

> **Transform text prompts into production-ready applications and websites with AI-powered development**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-green?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?style=flat-square&logo=clerk)](https://clerk.com/)

## ✨ What is Kode AI?

Kode AI is a revolutionary AI-powered development platform that transforms natural language descriptions into fully functional, production-ready applications and websites. Built with cutting-edge technologies, it bridges the gap between ideas and implementation by leveraging advanced AI models to generate, deploy, and manage complete software projects.

### 🎯 Key Capabilities
- **AI Code Generation**: Convert text prompts into complete applications
- **Real-time Preview**: See your app come to life instantly
- **Production Deployment**: Deploy directly to production environments
- **Project Management**: Organize and manage multiple AI-generated projects
- **Interactive Development**: Iterate and refine through conversational AI

## 🏗️ Architecture Overview

### Frontend Stack
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible components
- **Framer Motion** - Smooth animations and transitions

### Backend Stack
- **tRPC** - End-to-end type-safe API layer
- **Prisma ORM** - Type-safe database queries
- **PostgreSQL** - Robust relational database
- **Inngest** - Serverless background jobs
- **Clerk** - Complete user management & authentication

### AI Integration
- **OpenAI GPT-4** - Advanced language model for code generation
- **E2B Code Interpreter** - Secure sandboxed code execution
- **Rate Limiting** - Intelligent usage management with `rate-limiter-flexible`

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 15+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/kode-ai.git
cd kode-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Configure your environment variables
# DATABASE_URL=postgresql://...
# CLERK_SECRET_KEY=...
# OPENAI_API_KEY=...
# INNGEST_SIGNING_KEY=...
# INNGEST_EVENT_KEY=...

# Set up the database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/kode_ai"

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# AI Services
OPENAI_API_KEY="sk-..."

# Background Jobs
INNGEST_SIGNING_KEY="signkey-prod-..."
INNGEST_EVENT_KEY="event-key-prod-..."

# Optional: E2B for sandbox execution
E2B_API_KEY="e2b_..."
```

## 📁 Project Structure

```
kode-ai/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (home)/            # Landing page
│   │   ├── api/               # API routes
│   │   ├── projects/          # Project management
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   └── code-view/        # Code preview components
│   ├── modules/              # Feature modules
│   │   ├── home/             # Home page features
│   │   ├── projects/         # Project management
│   │   ├── messages/         # AI conversation
│   │   └── usage/           # Usage tracking
│   ├── trpc/                 # tRPC configuration
│   ├── inngest/              # Background job functions
│   ├── lib/                  # Utilities and helpers
│   └── generated/            # Prisma generated types
├── prisma/                   # Database schema & migrations
├── public/                   # Static assets
└── sandbox-template/         # E2B sandbox templates
```

## 🎯 Core Features

### 1. AI-Powered Project Generation
- **Natural Language Processing**: Understand complex project requirements
- **Multi-language Support**: Generate code in JavaScript, TypeScript, Python, and more
- **Framework Agnostic**: Support for React, Vue, Angular, Next.js, and more
- **Database Integration**: Automatic database schema generation and migration

### 2. Real-time Development Environment
- **Live Preview**: Instant preview of generated applications
- **Hot Reload**: Real-time updates as you iterate
- **Interactive Debugging**: Debug generated code directly in the browser
- **Version Control**: Track changes and revert to previous versions

### 3. Production Deployment
- **One-click Deploy**: Deploy to production with a single click
- **Custom Domains**: Support for custom domain configuration
- **SSL Certificates**: Automatic SSL certificate generation
- **CDN Integration**: Global content delivery network

### 4. Project Management
- **Multi-project Support**: Manage multiple AI-generated projects
- **Collaboration Tools**: Share projects with team members
- **Usage Analytics**: Track resource usage and performance
- **Export Options**: Export projects as ZIP or Git repositories

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema changes
npm run db:studio    # Open Prisma Studio

# Type checking
npm run type-check   # Run TypeScript compiler
```

### Development Workflow

1. **Feature Development**: Create feature branches for new functionality
2. **Database Changes**: Use Prisma migrations for schema updates
3. **Component Development**: Build with shadcn/ui components
4. **API Development**: Use tRPC for type-safe endpoints
5. **Background Jobs**: Implement with Inngest functions

## 🧪 Testing

### Testing Strategy
- **Unit Tests**: Jest for component and utility testing
- **Integration Tests**: Playwright for end-to-end testing
- **Type Safety**: TypeScript strict mode
- **Database Testing**: Prisma test utilities

### Running Tests
```bash
# Run all tests
npm test

# Run specific test suite
npm test:unit
npm test:e2e
```

## 🚀 Deployment

### Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker Deployment
```bash
# Build image
docker build -t kode-ai .

# Run container
docker run -p 3000:3000 --env-file .env kode-ai
```

### Environment-specific Configurations

#### Production
- **Database**: Managed PostgreSQL (Supabase, PlanetScale)
- **Authentication**: Clerk production keys
- **AI Services**: OpenAI production API
- **Monitoring**: Vercel Analytics

#### Staging
- **Database**: Staging PostgreSQL instance
- **Authentication**: Clerk staging keys
- **AI Services**: OpenAI with usage limits

## 📊 Performance Optimization

### Frontend Optimizations
- **Next.js Optimization**: 
  - Image optimization with `next/image`
  - Font optimization with `next/font`
  - Bundle analyzer for size monitoring
- **Code Splitting**: Automatic route-based splitting
- **Caching**: 
  - Static generation for marketing pages
  - ISR for dynamic content
  - React Query for data caching

### Backend Optimizations
- **Database**: 
  - Connection pooling with Prisma
  - Query optimization with indexes
  - Read replicas for scaling
- **Caching**: 
  - Redis for session management
  - CDN for static assets
- **Rate Limiting**: Intelligent usage limits per user

## 🔐 Security Features

### Authentication & Authorization
- **Clerk**: Complete user management solution
- **Role-based Access**: Project-level permissions
- **API Security**: Rate limiting and validation

### Data Protection
- **Encryption**: At-rest and in-transit encryption
- **Input Validation**: Zod schemas for all inputs
- **SQL Injection Prevention**: Prisma ORM protection
- **XSS Protection**: React built-in protections

## 🎨 UI/UX Design System

### Design Tokens
- **Colors**: Comprehensive color palette with dark mode support
- **Typography**: System fonts with fallbacks
- **Spacing**: Consistent spacing scale
- **Shadows**: Elevation system for depth

### Components
- **shadcn/ui**: 50+ pre-built components
- **Custom Components**: Project-specific components
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 compliance

## 📈 Analytics & Monitoring

### Application Monitoring
- **Vercel Analytics**: Performance monitoring
- **Error Tracking**: Sentry integration
- **User Analytics**: PostHog for product insights

### Business Metrics
- **Usage Tracking**: Per-user resource consumption
- **Performance Metrics**: Response times and error rates
- **Business Intelligence**: Project success rates

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass: `npm test`
6. Commit changes: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Standardized commit messages

## 📚 API Documentation

### tRPC Procedures
```typescript
// Project management
projects.create: Create new AI project
projects.getById: Get project details
projects.update: Update project configuration
projects.delete: Delete project

// Message handling
messages.create: Send message to AI
messages.getByProject: Get project messages
messages.update: Update message content

// Usage tracking
usage.get: Get user usage statistics
usage.update: Update usage points
```

### REST Endpoints
- `GET /api/projects` - List user projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details
- `POST /api/projects/:id/messages` - Send AI message

## 🛠️ Troubleshooting

### Common Issues

#### Database Connection
```bash
# Check database connection
npx prisma db pull

# Reset database
npx prisma migrate reset
```

#### Authentication Issues
- Ensure Clerk keys are correctly configured
- Check middleware configuration in `src/middleware.ts`

#### Build Failures
```bash
# Clear cache
rm -rf .next
npm run build
```

### Getting Help
- **Documentation**: Check inline code comments
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** - For GPT models powering code generation
- **Vercel** - For hosting and deployment platform
- **Clerk** - For authentication infrastructure
- **shadcn/ui** - For beautiful component library
- **Prisma** - For type-safe database toolkit

---

<div align="center">
  <p>Built with ❤️ by Me.</p>
  <p><a href="https://kode-ai-fawn.vercel.app/">🚀 Try Kode AI Now</a></p>
</div>
