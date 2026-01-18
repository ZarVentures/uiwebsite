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
    title: "Corporate Office Redesign",
    category: "Commercial",
    description: "Contemporary office space with collaborative work zones and wellness areas.",
    image: "/modern-office-interior.png",
    location: "Business Quarter",
    completionDate: "2023-11",
  },
  {
    id: "3",
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
