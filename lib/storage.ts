export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string // base64 or URL
  location: string
  completionDate: string
}

export interface SiteContent {
  companyName: string
  tagline: string
  about: string
  email: string
  phone: string
  address: string
}

export interface HeroContent {
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  backgroundImage?: string
}

export interface Service {
  id: string
  icon: string // Icon name from lucide-react
  title: string
  description: string
}

const PROJECTS_KEY = "urban_innovation_projects"
const CONTENT_KEY = "urban_innovation_content"
const HERO_KEY = "urban_innovation_hero"
const SERVICES_KEY = "urban_innovation_services"
const ADMIN_KEY = "urban_innovation_admin"

export const defaultContent: SiteContent = {
  companyName: "Urban Innovation",
  tagline: "Contemporary Design Solutions",
  about: "We create inspiring interior spaces that blend aesthetics with functionality.",
  email: "info@urbaninnovation.com",
  phone: "+1 (555) 123-4567",
  address: "123 Design St, Creative City, CC 12345",
}

export const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Modern Minimalist Apartment",
    category: "Residential",
    description: "A sleek urban apartment featuring clean lines and natural materials.",
    image: "/modern-minimalist-apartment-interior.jpg",
    location: "Downtown District",
    completionDate: "2024-01",
  },
  {
    id: "2",
    title: "Luxurious Modern Living Room",
    category: "Residential",
    description: "A bright and sophisticated living space with neutral palette and natural textures.",
    image: "/residential-living-room.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-02",
  },
  {
    id: "3",
    title: "Serene Modern Bedroom",
    category: "Residential",
    description: "A tranquil bedroom design seamlessly connecting with nature through expansive glass doors.",
    image: "/residential-bedroom.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-02",
  },
  {
    id: "4",
    title: "Elegant Modern Kitchen",
    category: "Residential",
    description: "A bright and sophisticated kitchen featuring light wood tones, crisp white, and gold accents.",
    image: "/residential-kitchen.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-02",
  },
  {
    id: "5",
    title: "Upscale Restaurant Interior",
    category: "F&B",
    description: "A warm and inviting restaurant featuring natural materials, integrated greenery, and sophisticated lighting.",
    image: "/fnb-restaurant.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-03",
  },
  {
    id: "6",
    title: "Modern Cafe Design",
    category: "F&B",
    description: "A bright and elegantly designed cafe blending soft colors with natural wood tones and abundant greenery.",
    image: "/fnb-cafe.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-03",
  },
  {
    id: "7",
    title: "Commercial Kitchen",
    category: "F&B",
    description: "A sleek and professional commercial kitchen with extensive stainless steel and clean white surfaces.",
    image: "/fnb-kitchen.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-03",
  },
  {
    id: "8",
    title: "Food Court & Multi-Cuisine Restaurant",
    category: "F&B",
    description: "A modern food court with distinct food stalls and diverse seating arrangements in a warm, inviting ambiance.",
    image: "/fnb-food-court.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-03",
  },
  {
    id: "9",
    title: "Modern Healthcare Facility",
    category: "Commercial",
    description: "A clean and modern hospital hallway with functional design and welcoming atmosphere.",
    image: "/commercial-healthcare.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-04",
  },
  {
    id: "10",
    title: "Elegant Office Lobby",
    category: "Commercial",
    description: "A spacious and elegantly designed office lobby with grand staircase and natural light.",
    image: "/commercial-lobby.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-04",
  },
  {
    id: "11",
    title: "Open-Plan Office Space",
    category: "Commercial",
    description: "A modern open-plan office environment with glass-partitioned meeting rooms and workstations.",
    image: "/commercial-office.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-04",
  },
  {
    id: "12",
    title: "Educational Facility Interior",
    category: "Commercial",
    description: "A bright and modern school or office building with contemporary design and functional spaces.",
    image: "/commercial-educational.jpg.png",
    location: "Dubai, UAE",
    completionDate: "2024-04",
  },
  {
    id: "13",
    title: "Corporate Office Redesign",
    category: "Commercial",
    description: "Contemporary office space with collaborative work zones and wellness areas.",
    image: "/modern-office-interior.png",
    location: "Business Quarter",
    completionDate: "2023-11",
  },
  {
    id: "14",
    title: "Boutique Retail Space",
    category: "Commercial",
    description: "Elegant retail environment showcasing curated products with atmospheric lighting.",
    image: "/retail-store-interior-design.jpg",
    location: "Shopping District",
    completionDate: "2023-09",
  },
]

export const defaultHero: HeroContent = {
  badge: "UNIQUE INTERIOR DESIGN",
  title: "LET YOUR HOME BE",
  titleHighlight: "UNIQUE AND STYLISH",
  subtitle: "Transform your living space into a personalized masterpiece that reflects your unique style and personality. Award-winning design solutions that blend aesthetics with functionality.",
  primaryButtonText: "Explore Our Work",
  primaryButtonLink: "#portfolio",
  secondaryButtonText: "Get Started",
  secondaryButtonLink: "/contact",
  backgroundImage: "/hero-background.jpg",
}

export const defaultServices: Service[] = [
  {
    id: "1",
    icon: "Home",
    title: "Residential Transformation",
    description: "Transform your home into a personalized sanctuary with our tailored residential design solutions.",
  },
  {
    id: "2",
    icon: "Building2",
    title: "Commercial Spaces",
    description: "Create inspiring workspaces and retail environments that reflect your brand identity.",
  },
  {
    id: "3",
    icon: "Palette",
    title: "Color & Materials",
    description: "Expert guidance on color palettes, materials, and finishes for your project.",
  },
  {
    id: "4",
    icon: "Lightbulb",
    title: "Lighting Design",
    description: "Strategic lighting solutions that enhance ambiance and functionality.",
  },
]

export const getProjects = (): Project[] => {
  if (typeof window === "undefined") return defaultProjects
  const stored = localStorage.getItem(PROJECTS_KEY)
  return stored ? JSON.parse(stored) : defaultProjects
}

export const saveProjects = (projects: Project[]): void => {
  if (typeof window === "undefined") return
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects))
}

export const getContent = (): SiteContent => {
  if (typeof window === "undefined") return defaultContent
  const stored = localStorage.getItem(CONTENT_KEY)
  return stored ? JSON.parse(stored) : defaultContent
}

export const saveContent = (content: SiteContent): void => {
  if (typeof window === "undefined") return
  localStorage.setItem(CONTENT_KEY, JSON.stringify(content))
}

export const checkAdminAccess = (): boolean => {
  if (typeof window === "undefined") return false
  return localStorage.getItem(ADMIN_KEY) === "true"
}

export const setAdminAccess = (hasAccess: boolean): void => {
  if (typeof window === "undefined") return
  if (hasAccess) {
    localStorage.setItem(ADMIN_KEY, "true")
  } else {
    localStorage.removeItem(ADMIN_KEY)
  }
}

export const getHero = (): HeroContent => {
  if (typeof window === "undefined") return defaultHero
  const stored = localStorage.getItem(HERO_KEY)
  return stored ? JSON.parse(stored) : defaultHero
}

export const saveHero = (hero: HeroContent): void => {
  if (typeof window === "undefined") return
  localStorage.setItem(HERO_KEY, JSON.stringify(hero))
}

export const getServices = (): Service[] => {
  if (typeof window === "undefined") return defaultServices
  const stored = localStorage.getItem(SERVICES_KEY)
  return stored ? JSON.parse(stored) : defaultServices
}

export const saveServices = (services: Service[]): void => {
  if (typeof window === "undefined") return
  localStorage.setItem(SERVICES_KEY, JSON.stringify(services))
}
