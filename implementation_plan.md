# AI-Powered Markdown Documentation Generator

## Project Description

The **AI-Powered Markdown Documentation Generator** is a sophisticated web application that streamlines the creation of professional documentation using artificial intelligence. Powered by Google's Gemini 2.5 AI, this tool enables developers and technical writers to generate high-quality markdown documentation in real-time through a modern, intuitive interface.

### Key Features
- **Real-time AI-Powered Generation**: Stream markdown documentation as it's being generated using Vercel's AI SDK
- **Side-by-Side Workspace**: Write input code/requirements on the left, see formatted markdown output on the right
- **Multiple Documentation Templates**: Choose from pre-configured system prompts for different documentation types (API Reference, Getting Started, Changelog, etc.)
- **Professional Styling**: GitHub-style markdown rendering with typography-aware layout
- **Persistence & Export**: Save work locally, export to clipboard, or download as markdown files
- **Dark Mode Support**: Fully functional light and dark themes
- **Deployment Ready**: Built for seamless deployment on Vercel with optimized streaming

---

## Development Roadmap: 5-Phase Sprint Plan

### 📅 Phase 1: Core Infrastructure & Setup (Days 1–3)

**Goal**: Establish the project foundation and enable AI communication.

#### Tasks

1. **Initialize Next.js Project**
   - Use `npx create-next-app@latest` with the following options:
     - TypeScript: Yes
     - Tailwind CSS: Yes
     - App Router: Yes
     - ESLint: Yes
   - Set up project directory structure

2. **Install AI & UI Dependencies**
   ```bash
   npm install ai @ai-sdk/google
   npm install lucide-react
   npm install react-markdown
   npm install react-simple-code-editor
   # OR
   npm install @monaco-editor/react
   npm install -D @tailwindcss/typography
   ```

3. **Environment Configuration**
   - Create `.env.local` file with:
     ```
     GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
     ```
   - Add `.env.local` to `.gitignore`

4. **Create Route Handler**
   - Path: `app/api/generate/route.ts`
   - Implement POST endpoint to handle AI requests
   - Use Vercel AI SDK's `streamText()` for streaming responses
   - Handle errors and edge cases

5. **Project Structure Setup**
   ```
   src/
   ├── app/
   │   ├── api/
   │   │   └── generate/
   │   │       └── route.ts
   │   ├── layout.tsx
   │   ├── page.tsx
   │   └── globals.css
   ├── components/
   ├── lib/
   │   └── prompts.ts
   └── types/
       └── index.ts
   ```

#### Deliverables
- ✅ Next.js app running locally
- ✅ API route responding to requests
- ✅ Environment variables configured
- ✅ Project structure established

---

### 📅 Phase 2: The "Side-by-Side" Workspace (Days 4–7)

**Goal**: Build the core user interface with real-time markdown rendering.

#### Tasks

1. **Input Section Component**
   - Create a code editor component (`components/CodeEditor.tsx`)
   - Options for implementation:
     - **Lightweight**: `react-simple-code-editor` with syntax highlighting
     - **Feature-rich**: `@monaco-editor/react` (VS Code-like experience)
   - Support for:
     - Multiple languages syntax highlighting
     - Line numbers
     - Customizable theme

2. **Output Section Component**
   - Create markdown preview component (`components/MarkdownPreview.tsx`)
   - Use `react-markdown` for rendering
   - Install @tailwindcss/typography for professional GitHub-style formatting:
     ```bash
     npm install -D @tailwindcss/typography
     ```

3. **Main Workspace Layout**
   - Create `components/Workspace.tsx`
   - Split layout: 50/50 responsive grid
   - Mobile fallback: Stack vertically on small screens
   - Add separator bar with drag-to-resize functionality (optional)

4. **Streaming Integration**
   - Implement `useChat` or `useCompletion` hook from Vercel AI SDK
   - Connect input editor to API endpoint
   - Display real-time streaming in preview
   - Add loading state indicator

5. **Tailwind Configuration**
   - Update `tailwind.config.ts`:
     ```javascript
     {
       plugins: [require('@tailwindcss/typography')],
       theme: {
         extend: {
           colors: { /* custom colors */ }
         }
       }
     }
     ```

#### Deliverables
- ✅ Functional code editor with syntax highlighting
- ✅ Real-time markdown preview with professional styling
- ✅ Working AI streaming integration
- ✅ Responsive layout for desktop and mobile

---

### 📅 Phase 3: Prompt Engineering & Templates (Days 8–10)

**Goal**: Create specialized documentation generators for different use cases.

#### Tasks

1. **System Prompts Library**
   - File: `lib/prompts.ts`
   - Create template prompts for:
     - **API Reference**: Structured endpoint documentation with examples
     - **Getting Started**: Beginner-friendly setup and quick start guides
     - **Changelog**: Version history with features, fixes, and breaking changes
     - **README**: Project overview and feature highlights
     - **Architecture**: System design and component relationships
     - **Contributing**: Developer contribution guidelines
   - Each prompt should be optimized for clarity and consistency

2. **Template Selector Component**
   - Create `components/TemplateSelector.tsx`
   - Display available templates as radio buttons or dropdown
   - Live preview of selected template description
   - Show example outputs

3. **Context Metadata Input**
   - Add optional metadata fields:
     - Project Name
     - Primary Programming Language
     - Project Type (Library, Framework, Tool, etc.)
     - Target Audience (Developers, Designers, End-users)
   - Pass metadata to AI context for personalized documentation

4. **Prompt Composition Logic**
   - Function to dynamically build system prompt combining:
     - Selected template instructions
     - User metadata
     - Best practices guidelines
   - Implement in `lib/generatePrompt.ts`

5. **Advanced Prompt Features**
   - Custom prompt override for power users
   - Prompt history/favorites
   - A/B testing interface for comparing different templates

#### Deliverables
- ✅ 6+ specialized prompt templates
- ✅ Template selector UI component
- ✅ Metadata input form
- ✅ Dynamic prompt composition system

---

### 📅 Phase 4: Persistence & Export (Days 11–14)

**Goal**: Enable users to save, retrieve, and export their documentation.

#### Tasks

1. **Local Storage Implementation**
   - Create `lib/storage.ts` utility:
     - Auto-save on every input change (debounced)
     - Save interval: 500ms
     - Track: input code, selected template, metadata
   - Create hook: `hooks/useLocalStorage.ts`
   - Warn users before losing unsaved work

2. **Export Features**
   
   **a) Copy to Clipboard**
   - Create `components/ExportButton.tsx`
   - Use native `navigator.clipboard.writeText()`
   - Show success toast notification
   
   **b) Download as .md File**
   - Function in `lib/exportMarkdown.ts`:
     ```typescript
     function downloadMarkdown(content: string, filename: string)
     ```
   - Create blob and trigger download
   - Default filename: `documentation_${timestamp}.md`
   
   **c) Email Export** (Optional)
   - Implement API endpoint: `app/api/email/route.ts`
   - Send documentation to user's email
   - Include tracking metadata

3. **Project Management UI**
   - Create `components/ProjectManager.tsx`
   - Display saved projects list
   - Load/delete project actions
   - Last modified timestamp

4. **Supabase Integration** (Optional but Recommended)
   - Set up Supabase project
   - Create schema:
     ```sql
     CREATE TABLE projects (
       id uuid PRIMARY KEY,
       user_id uuid NOT NULL,
       title text NOT NULL,
       content text,
       template text,
       metadata jsonb,
       created_at timestamp,
       updated_at timestamp
     )
     ```
   - Implement authentication (GitHub/Google)
   - Create `lib/supabase.ts` client
   - Add login/signup pages
   - Sync local storage to cloud on login

#### Deliverables
- ✅ Auto-save to localStorage
- ✅ Copy to clipboard functionality
- ✅ Download as markdown file
- ✅ Project management interface
- ✅ (Optional) Cloud sync with Supabase

---

### 📅 Phase 5: Polish & Deployment (Days 15+)

**Goal**: Create a production-ready, polished application.

#### Tasks

1. **Dark Mode Implementation**
   - Install `next-themes`:
     ```bash
     npm install next-themes
     ```
   - Create `components/ThemeToggle.tsx`
   - Update `layout.tsx` with theme provider
   - Test markdown rendering in both modes
   - Ensure proper contrast ratios (WCAG AA compliant)

2. **Error Handling & User Feedback**
   - Install toast notification library:
     ```bash
     npm install react-hot-toast
     # OR
     npm install sonner
     ```
   - Create error boundary component
   - Add toast notifications for:
     - API errors with retry options
     - Empty input validation
     - Network failures
     - Export success/failure
   - Implement proper error messages in console

3. **Performance Optimization**
   - Code splitting for monaco-editor if used
   - Lazy load preview component
   - Optimize images and assets
   - Implement pagination for project lists
   - Add analytics tracking (optional)

4. **Vercel Deployment Configuration**
   - Update `next.config.js`:
     ```javascript
     /** @type {import('next').NextConfig} */
     const nextConfig = {
       reactStrictMode: true,
     }
     module.exports = nextConfig
     ```
   - Create `vercel.json` for custom configuration:
     ```json
     {
       "functions": {
         "app/api/**": {
           "maxDuration": 60
         }
       }
     }
     ```
   - Set environment variables in Vercel dashboard

5. **Testing & Quality Assurance**
   - Set up Jest for unit tests
   - Create integration tests for API routes
   - Test all export functionality
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Mobile responsiveness verification
   - Accessibility audit (axe-core)

6. **Documentation & Deployment**
   - Create `README.md` for the project
   - Write API documentation
   - Create user guide/tutorial
   - Deploy to Vercel:
     ```bash
     npm run build
     vercel deploy --prod
     ```
   - Set up custom domain (optional)
   - Configure analytics

7. **Post-Launch Monitoring**
   - Set up error tracking (Sentry, LogRocket)
   - Monitor API performance
   - Track user engagement
   - Gather feedback and iterate

#### Deliverables
- ✅ Fully functional dark/light mode
- ✅ Comprehensive error handling
- ✅ Production-optimized build
- ✅ Live on Vercel
- ✅ Monitoring and analytics in place
- ✅ Complete documentation

---

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend Framework** | Next.js 14+ | App Router, SSR capabilities |
| **Language** | TypeScript | Type safety and DX |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Typography** | @tailwindcss/typography | Professional markdown styling |
| **Code Editor** | react-simple-code-editor or @monaco-editor/react | Input editing |
| **Markdown Rendering** | react-markdown | Output preview |
| **AI Integration** | Vercel AI SDK + OpenAI | Streaming LLM responses |
| **Icons** | lucide-react | UI icons |
| **Notifications** | sonner or react-hot-toast | User feedback |
| **Theme Management** | next-themes | Dark/light mode |
| **Backend Database** | Supabase (optional) | User authentication & projects |
| **Deployment** | Vercel | Hosting platform |

---

## Success Metrics

- **Phase 1**: App running locally, API responding
- **Phase 2**: Real-time streaming works in browser
- **Phase 3**: 6+ templates generating quality output
- **Phase 4**: Users can save/export work seamlessly
- **Phase 5**: Production app on Vercel, accessible globally

---

## Notes & Best Practices

1. **AI Streaming**: Always test with slower network connections to ensure streaming UX is smooth
2. **API Rate Limiting**: Implement request throttling to avoid OpenAI quota issues
3. **Cost Management**: Monitor API usage; consider implementing usage limits per user
4. **Mobile First**: Test on mobile devices early; don't treat it as an afterthought
5. **Accessibility**: Use semantic HTML, test with screen readers, ensure keyboard navigation
6. **Security**: Never expose API keys in client code; always use environment variables
7. **Testing**: Write tests as you go; end-to-end tests for critical flows

---

## Timeline Summary

```
Days 1-3:   Core Infrastructure ██░░░░░░░░░░░░░░░░░░
Days 4-7:   Workspace UI       ██████░░░░░░░░░░░░░░
Days 8-10:  Prompt Engineering █████░░░░░░░░░░░░░░░
Days 11-14: Persistence & Export ████░░░░░░░░░░░░░░░
Days 15+:   Polish & Deploy    ███░░░░░░░░░░░░░░░░░
```

**Estimated Total Duration**: 15-20 days for MVP, additional time for refinement and optimization.

---

## Getting Started Commands

```bash
# Initialize project
npx create-next-app@latest velogossem --typescript --tailwind --app

# Install dependencies
npm install ai @ai-sdk/openai lucide-react react-markdown react-simple-code-editor next-themes sonner

# Development
npm run dev

# Build & deploy
npm run build
vercel deploy --prod
```
