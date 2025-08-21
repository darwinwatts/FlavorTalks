# 🍽️ FlavorTalks 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0+-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38bdf8.svg)](https://tailwindcss.com/)

## 🌟 What is FlavorTalks
Flavor Talks is an innovative AI-powered culinary discovery platform that revolutionizes how people explore food through conversational storytelling. By combining advanced LLM narrative generation with intelligent taste profiling, the platform creates personalized dining experiences that go beyond traditional food apps.

Inspired by services like UberEats, DoorDash, Bite Sight and Qloo’s cultural taste intelligence, it helps users find personalized dining options through engaging storytelling.

Unlike conventional restaurant discovery apps, Flavor Talks transforms food exploration into an engaging conversation where AI understands your cravings, mood, dietary preferences, and cultural background to craft personalized culinary stories and recommendations.

## ✨ Key Features

### 🤖 **Intelligent Conversation Engine**

- **Natural Language Processing**: Describe your cravings in natural language
- **Context-Aware Responses**: AI remembers your preferences throughout the conversation
- **Mood-Based Recommendations**: Suggestions adapt to your current vibe and energy level
- **Cultural Intelligence**: Leverages cultural taste patterns for authentic recommendations

### 🎯 **Advanced Filtering & Personalization**

- **Smart Budget Filtering**: Flexible price range options from budget-friendly to fine dining
- **Vibe Matching**: Casual, romantic, business, celebration, and comfort food moods
- **Cultural Preferences**: Authentic cuisine recommendations based on cultural taste intelligence
- **Dietary Accommodations**: Vegetarian, vegan, gluten-free, and other dietary restrictions
- **Location Intelligence**: Proximity-based suggestions with real-time availability

### 💬 **Interactive Chat Experience**

- **Conversational Discovery**: Find food through natural dialogue
- **Storytelling Integration**: Each recommendation comes with engaging culinary narratives
- **Follow-up Questions**: AI probes deeper to understand your exact preferences
- **Memory Persistence**: Builds taste profiles over multiple conversations

### 📱 **Modern User Experience**

- **Mobile-First Design**: Optimized for on-the-go food discovery
- **Real-Time Updates**: Live menu updates and restaurant availability
- **Rich Media Cards**: High-quality images, ratings, and detailed descriptions
- **Seamless Integration**: Direct links to ordering platforms and reservations

## 🛠️ Technology Stack

### Frontend

- **React 18+** - Modern component-based architecture
- **Vite** - Lightning-fast development and build tool
- **Tailwind CSS** - Utility-first responsive styling
- **TypeScript** - Type-safe development (optional enhancement)

### AI & Intelligence

- **Large Language Models** - For conversational AI and narrative generation
- **Qloo Taste AI Integration** - Cultural taste intelligence and preference matching
- **Natural Language Processing** - Understanding user intent and context
- **Machine Learning** - Continuous improvement of recommendations

### Backend & APIs

- **Node.js** - Server-side runtime
- **Express.js** - Web application framework
- **RESTful APIs** - Clean, scalable API architecture
- **Real-time Data Integration** - Live restaurant and menu information

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/darwinwatts/flavor-talks.git
   cd flavor-talks
   ```
1. **Install dependencies**
   
   ```bash
   npm install
   # or
   yarn install
   ```
1. **Environment Setup**
   
   ```bash
   cp .env.example .env
   # Edit .env with your API keys and configuration
   ```
1. **Start development server**
   
   ```bash
   npm run dev
   # or
   yarn dev
   ```
1. **Open in browser**
   Navigate to `http://localhost:5173` to see the application

### Environment Variables

```env
VITE_QLOO_API_KEY=your_qloo_api_key
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_API_BASE_URL=http://localhost:3001
```

## 📖 Usage Examples

### Basic Conversation Flow

```
User: "I'm feeling something warm and comforting for a rainy evening"

Flavor Talks: "I love that cozy vibe! 🌧️ Are you thinking more along the lines of 
a hearty soup that wraps around you like a warm hug, or maybe some comfort food 
that brings back childhood memories? And what's your budget looking like tonight?"

User: "Something under $20, maybe Asian-inspired?"

Flavor Talks: "Perfect! I'm thinking about this incredible ramen shop nearby that 
serves steaming bowls of tonkotsu ramen - the broth is rich and creamy, simmered 
for 20 hours. There's something magical about the way the noodles dance in the 
golden broth while the soft-boiled egg adds that perfect creamy texture..."
```

### Filter-Based Discovery

- **Budget**: $, $$, $$$, $$$$
- **Vibe**: Casual, Date Night, Business, Celebration, Comfort, Adventure
- **Culture**: Italian, Japanese, Mexican, Indian, Mediterranean, Fusion
- **Dietary**: Vegetarian, Vegan, Gluten-Free, Keto, Halal, Kosher

## 🎨 Design Philosophy

Flavor Talks embraces a **conversation-first approach** to food discovery:

- **Human-Centric**: Natural language interactions feel like talking to a knowledgeable friend
- **Story-Driven**: Every recommendation comes with engaging narratives about the food, chef, or cultural background
- **Emotionally Intelligent**: Understands mood, context, and emotional connection to food
- **Culturally Aware**: Respects and celebrates diverse culinary traditions
- **Personalized**: Learns and adapts to individual taste preferences over time

## 🔄 Development Roadmap

### Phase 1: Core Chat Interface ✅

- [x] Basic conversational AI integration
- [x] Natural language processing for food queries
- [x] Real-time chat interface
- [x] Mobile-responsive design

### Phase 2: Advanced Intelligence 🔄

- [ ] Qloo Taste AI integration for cultural intelligence
- [ ] Memory persistence across sessions
- [ ] Advanced preference learning algorithms
- [ ] Multi-turn conversation optimization

### Phase 3: Enhanced Discovery 📋

- [ ] Real-time restaurant data integration
- [ ] Advanced filtering and search capabilities
- [ ] Location-based recommendations
- [ ] Social sharing and reviews

### Phase 4: Ecosystem Integration 🎯

- [ ] Direct ordering platform integration
- [ ] Reservation system connectivity
- [ ] Loyalty program partnerships
- [ ] Social community features

## 🤝 Contributing

We welcome contributions to Flavor Talks! Here’s how you can help:

1. **Fork the repository**
1. **Create a feature branch**: `git checkout -b feature/amazing-feature`
1. **Make your changes** and ensure tests pass
1. **Commit your changes**: `git commit -m 'Add amazing feature'`
1. **Push to the branch**: `git push origin feature/amazing-feature`
1. **Open a Pull Request**

### Development Guidelines

- Follow React best practices and hooks patterns
- Maintain mobile-first responsive design
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the <LICENSE> file for details.

## 🙏 Acknowledgments

- **Qloo** - For cultural taste intelligence and preference matching technology
- **OpenAI** - For large language model capabilities
- **Vercel** - For seamless deployment and hosting
- **The culinary community** - For inspiring the stories and experiences we help discover

## 📞 Contact & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/darwinwatts/flavor-talks/issues)
- **Email**: [adeolasworks@gmail.com](mailto:adeolasworks@gmail.com)
- **Twitter**: [@deolatoo](https://twitter.com/deolatoo) 

-----

*“Every meal tells a story, and every craving deserves a conversation.”*

**Flavor Talks** - Where AI meets appetite, and discovery becomes dialogue.
