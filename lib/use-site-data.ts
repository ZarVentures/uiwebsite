"use client"

import { useState, useEffect, useCallback } from "react"
import { getProjects, saveProjects, getContent, saveContent, getHero, saveHero, getServices, saveServices } from "./storage"
import type { Project, SiteContent, HeroContent, Service } from "./storage"

export function useSiteData() {
  const [projects, setProjects] = useState<Project[]>([])
  const [content, setContent] = useState<SiteContent>(getContent())
  const [hero, setHero] = useState<HeroContent>(getHero())
  const [services, setServices] = useState<Service[]>(getServices())
  const [isLoading, setIsLoading] = useState(true)

  // Listen for storage changes from other tabs/windows
  useEffect(() => {
    const loadData = () => {
      setProjects(getProjects())
      setContent(getContent())
      setHero(getHero())
      setServices(getServices())
      setIsLoading(false)
    }

    loadData()

    // Listen for storage changes in real-time
    const handleStorageChange = () => {
      loadData()
    }

    window.addEventListener("storage", handleStorageChange)
    // Custom event for same-tab updates
    window.addEventListener("siteDataUpdated", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("siteDataUpdated", handleStorageChange)
    }
  }, [])

  const updateProjects = useCallback((newProjects: Project[]) => {
    saveProjects(newProjects)
    setProjects(newProjects)
    // Dispatch custom event for real-time updates
    window.dispatchEvent(new Event("siteDataUpdated"))
  }, [])

  const updateContent = useCallback((newContent: SiteContent) => {
    saveContent(newContent)
    setContent(newContent)
    // Dispatch custom event for real-time updates
    window.dispatchEvent(new Event("siteDataUpdated"))
  }, [])

  const updateHero = useCallback((newHero: HeroContent) => {
    saveHero(newHero)
    setHero(newHero)
    // Dispatch custom event for real-time updates
    window.dispatchEvent(new Event("siteDataUpdated"))
  }, [])

  const updateServices = useCallback((newServices: Service[]) => {
    saveServices(newServices)
    setServices(newServices)
    // Dispatch custom event for real-time updates
    window.dispatchEvent(new Event("siteDataUpdated"))
  }, [])

  return {
    projects,
    content,
    hero,
    services,
    isLoading,
    updateProjects,
    updateContent,
    updateHero,
    updateServices,
  }
}
