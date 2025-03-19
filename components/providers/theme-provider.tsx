"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Ce composant est un wrapper autour de la bibliothèque next-themes
// Il permet de gérer le thème clair/sombre de l'application
// Les props sont transmises directement au provider de next-themes
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
