# Overview

This is a full-stack aerospace company website for Cingularity Aerospace™, built with React (client) and Express.js (server). The application serves as a modern corporate website featuring company information, services showcase, and a contact inquiry system. It's designed for an AS 9100 D & ISO 9001/2015 certified aerospace company specializing in UAV manufacturing, precision engineering, and defense solutions.

The system follows a modern TypeScript-first architecture with shared schemas between frontend and backend, comprehensive UI component library using shadcn/ui, and a clean separation of concerns between client and server code.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom aerospace-themed color variables and responsive design
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build System**: Vite with custom path aliases and development tooling integration

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Validation**: Shared Zod schemas between client and server for consistent data validation
- **API Design**: RESTful API structure with dedicated routes for inquiry management
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Development Tools**: Custom logging middleware and error handling with structured responses

## Database Design
- **Primary Database**: PostgreSQL with Drizzle ORM migrations
- **Schema Structure**: 
  - Users table with UUID primary keys and unique username constraints
  - Inquiries table for contact form submissions with typed inquiry categories
  - Shared TypeScript types generated from database schema using Drizzle
- **Migration System**: Drizzle Kit for schema migrations and database management

## Development Environment
- **Build Process**: Dual compilation - Vite for frontend, esbuild for backend
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Path Resolution**: Custom path aliases for clean imports (@/, @shared/, @assets/)
- **Development Server**: Integrated Vite development server with HMR and Replit integration
- **Code Quality**: Consistent formatting and linting setup

## API Structure
- **Inquiry Management**: Full CRUD operations for contact form submissions
  - POST /api/inquiries - Create new inquiry with validation
  - GET /api/inquiries - Retrieve all inquiries (admin functionality)
  - GET /api/inquiries/:id - Retrieve specific inquiry by ID
- **Error Handling**: Centralized error middleware with structured JSON responses
- **Request Logging**: Custom middleware for API request/response logging with duration tracking

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon database connection for serverless PostgreSQL
- **drizzle-orm & drizzle-kit**: Modern TypeScript ORM with schema migration tools
- **@tanstack/react-query**: Server state management and data fetching
- **wouter**: Lightweight React router alternative

## UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives for components
- **tailwindcss**: Utility-first CSS framework with custom aerospace color scheme
- **lucide-react**: Modern icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs

## Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer for external validation libraries
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation

## Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite with Fast Refresh
- **@replit/vite-plugin-runtime-error-modal**: Development error handling for Replit environment
- **tsx**: TypeScript execution engine for Node.js development server
- **esbuild**: Fast JavaScript bundler for production server builds

## Database and Storage
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **Neon Database**: Serverless PostgreSQL database platform for scalable data storage