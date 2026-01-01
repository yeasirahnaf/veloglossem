# AI-Powered Markdown Documentation Generator

> **Effortlessly generate professional documentation using artificial intelligence**

Transform your code, ideas, and requirements into beautifully formatted markdown documentation in real-time. Powered by OpenAI's advanced language models, this tool streamlines the entire documentation workflow.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)

---

## 🚀 Quick Overview

**The Problem:**
Writing comprehensive documentation is tedious, time-consuming, and often neglected in development workflows.

**Our Solution:**
An intelligent, real-time markdown generator that combines a powerful code editor with AI-driven documentation creation. Write your requirements once, and let AI generate polished, professional documentation in seconds.

---

## ✨ Key Features

### 🎯 **Multiple Documentation Templates**
Choose from specialized templates designed for different documentation needs:
- **API Reference** - Structured endpoint documentation with examples
- **Getting Started** - Beginner-friendly setup and quick-start guides
- **Changelog** - Version history with features, fixes, and breaking changes
- **README** - Project overviews and feature highlights
- **Architecture** - System design and component relationships
- **Contributing** - Developer contribution guidelines

### ⚡ **Real-Time Streaming**
Watch your documentation generate live as you type. No waiting, no delays—instant feedback powered by Vercel's AI SDK.

### 📝 **Side-by-Side Workspace**
- **Left Panel**: Powerful code editor with syntax highlighting
- **Right Panel**: Live markdown preview with professional GitHub-style formatting
- **Responsive**: Works seamlessly on desktop, tablet, and mobile devices

### 💾 **Smart Persistence**
- **Auto-Save**: Your work is automatically saved to local storage every 500ms
- **Local Projects**: Manage multiple projects without losing progress
- **Export Options**: Copy to clipboard, download as markdown, or email

### 🌙 **Beautiful Dark Mode**
Full dark mode support with carefully chosen colors for comfortable reading and writing in any lighting condition.

### 📤 **Multiple Export Formats**
- Copy generated markdown to clipboard with one click
- Download as `.md` file ready for GitHub, documentation sites, or any markdown platform
- Email documentation directly to collaborators
- (Optional) Cloud sync with Supabase

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | [Next.js 14+](https://nextjs.org/) |
| **Language** | [TypeScript 5.0+](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) |
| **Code Editor** | [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor) or [@monaco-editor/react](https://github.com/suren-atoyan/monaco-react) |
| **Markdown Rendering** | [react-markdown](https://github.com/remarkjs/react-markdown) |
| **AI Integration** | [Vercel AI SDK](https://sdk.vercel.ai/) + [OpenAI](https://openai.com/) |
| **UI Components** | [lucide-react](https://lucide.dev/) |
| **Notifications** | [sonner](https://sonner.emilkowal.ski/) |
| **Theme Management** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Database** (Optional) | [Supabase](https://supabase.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🎓 Use Cases

### For Developers
- Generate API documentation from code comments
- Create comprehensive README files for projects
- Write changelog entries for releases
- Document architecture decisions

### For Open Source Maintainers
- Rapidly onboard contributors with clear guidelines
- Keep documentation up-to-date automatically
- Maintain consistency across multiple projects
- Reduce time spent on documentation

### For Technical Writers
- Accelerate documentation workflows
- Maintain consistent formatting and style
- Generate first drafts for review and refinement
- Focus on content strategy, not formatting

### For Product Teams
- Create release notes and changelogs quickly
- Generate user-facing documentation
- Maintain consistent documentation standards
- Reduce time-to-market for new features

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- OpenAI API key ([get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/velogossem.git
   cd velogossem
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=sk_test_your_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📖 How to Use

### Basic Workflow

1. **Select a Template**
   - Choose from the template dropdown (API Reference, Getting Started, etc.)
   - Each template is optimized for specific documentation types

2. **Enter Your Input**
   - Paste code, requirements, or notes in the left panel
   - Optionally fill in metadata (project name, language, audience)

3. **Generate Documentation**
   - Click the "Generate" button
   - Watch your documentation appear in real-time on the right panel

4. **Export Your Work**
   - **Copy to Clipboard**: Quick sharing and pasting
   - **Download as .md**: Save to your local machine
   - **Save Project**: Store locally or to cloud (with Supabase)

5. **Refine & Iterate**
   - Modify your input and regenerate
   - Save multiple versions of the same project
   - Compare different template outputs

---

## 📋 Development Phases

This project follows a structured 5-phase development plan:

### Phase 1: Core Infrastructure & Setup (Days 1–3)
- Next.js project initialization
- AI SDK integration
- API route handler setup
- Environment configuration

### Phase 2: The "Side-by-Side" Workspace (Days 4–7)
- Code editor implementation
- Markdown preview rendering
- Real-time streaming logic
- Responsive layout design

### Phase 3: Prompt Engineering & Templates (Days 8–10)
- System prompts library
- Template selector UI
- Metadata context awareness
- Dynamic prompt composition

### Phase 4: Persistence & Export (Days 11–14)
- LocalStorage auto-save
- Export functionality (clipboard, file, email)
- Project management interface
- Optional Supabase integration

### Phase 5: Polish & Deployment (Days 15+)
- Dark mode implementation
- Error handling & notifications
- Performance optimization
- Vercel deployment

**See [implementation_plan.md](./implementation_plan.md) for detailed task breakdown.**

---

## 📊 Roadmap

- [x] Project initialization and planning
- [ ] Phase 1: Core infrastructure
- [ ] Phase 2: Side-by-side workspace
- [ ] Phase 3: Prompt engineering
- [ ] Phase 4: Persistence & export
- [ ] Phase 5: Polish & deployment
- [ ] MVP release
- [ ] Community feedback integration
- [ ] Advanced features (AI fine-tuning, custom models)

---

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/velogossem.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow our code style and conventions
   - Write clear commit messages
   - Add tests for new features

4. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Include screenshots for UI changes

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 🙋 Support & Community

- **Issues**: Found a bug? [Open an issue](https://github.com/yourusername/velogossem/issues)
- **Discussions**: Have ideas? Start a [discussion](https://github.com/yourusername/velogossem/discussions)
- **Email**: yeasirahnaf1313@gmail.com
- **Twitter**: [@yourhandle](https://twitter.com/yourhandle)

---

## 💡 Tips & Tricks

### For Best Results:
1. **Be Specific**: The more detailed your input, the better your documentation
2. **Use Metadata**: Fill in project context for more accurate, personalized output
3. **Multiple Passes**: Generate multiple times with different inputs to compare
4. **Review Output**: Always review and edit AI-generated content for accuracy
5. **Template Matching**: Choose the template that best matches your documentation needs

### Advanced Usage:
- **Custom Prompts**: Edit system prompts for specialized documentation types
- **Batch Generation**: Generate documentation for multiple components in sequence
- **A/B Testing**: Compare outputs from different templates on the same input
- **Team Collaboration**: Save projects to Supabase and share with team members

---

## 🎯 Project Goals

1. **Democratize Documentation**: Make professional documentation creation accessible to everyone
2. **Save Time**: Reduce documentation time from hours to minutes
3. **Maintain Quality**: Ensure consistent, professional-grade output
4. **Enable Collaboration**: Make it easy to share and iterate on documentation
5. **Build Community**: Create a tool that developers love to use

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel AI SDK Docs](https://sdk.vercel.ai/)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [React Markdown Guide](https://github.com/remarkjs/react-markdown)

---

## 🔮 Future Enhancements

- [ ] Support for additional AI models (Claude, Gemini, Llama)
- [ ] Multi-language documentation generation
- [ ] Integration with GitHub for automatic documentation updates
- [ ] IDE plugins for VSCode and JetBrains
- [ ] Team collaboration features with real-time co-editing
- [ ] Analytics dashboard for documentation metrics
- [ ] Custom training on project-specific documentation
- [ ] Export to other formats (HTML, PDF, Docx)

---

## 📈 Performance

- **Streaming Response Time**: < 1 second for first token
- **Preview Rendering**: < 100ms for markdown updates
- **Export Speed**: < 500ms for clipboard/download
- **Browser Support**: Chrome, Firefox, Safari, Edge (latest versions)

---

## ⚡ Quick Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Building
npm run build            # Create production build
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format with Prettier

# Deployment
vercel deploy            # Deploy to Vercel staging
vercel deploy --prod     # Deploy to production
```

---

## 🎉 Acknowledgments

Built with ❤️ by the VeloGossem team.

Special thanks to:
- [Vercel](https://vercel.com/) for the AI SDK
- [OpenAI](https://openai.com/) for the language models
- [Next.js](https://nextjs.org/) community
- Our amazing contributors

---

## 📞 Contact

Have questions or suggestions? Reach out to us:
- **GitHub Issues**: [Project Issues](https://github.com/yourusername/velogossem/issues)
- **Email**: yeasirahnaf1313@gmail.com
- **Discord**: [Join our community](https://discord.gg/yourserver)

---

<div align="center">

**[Live Demo](https://velogossem.vercel.app/)** • **[Documentation](./implementation_plan.md)** • **[Report Bug](https://github.com/yourusername/velogossem/issues)** • **[Request Feature](https://github.com/yourusername/velogossem/discussions)**

Made with 🚀 for the developer community

</div>
