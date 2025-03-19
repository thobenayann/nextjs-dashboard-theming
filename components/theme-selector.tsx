"use client";

import { useThemeConfig } from "@/components/active-theme";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Définition des thèmes disponibles, organisés en catégories

// Thèmes standards
const DEFAULT_THEMES = [
  {
    name: "Default",
    value: "default",
  },
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Amber",
    value: "amber",
  },
  // Nouveau thème violet
  {
    name: "Purple",
    value: "purple",
  },
  // Thème rose
  {
    name: "Pink",
    value: "pink",
  },
  // Thème sombre élégant
  {
    name: "Midnight",
    value: "midnight",
  },
];

// Thèmes avec mise à l'échelle (scaled)
const SCALED_THEMES = [
  {
    name: "Default",
    value: "default-scaled",
  },
  {
    name: "Blue",
    value: "blue-scaled",
  },
  // Nouveau thème violet avec mise à l'échelle
  {
    name: "Purple",
    value: "purple-scaled",
  },
  // Thème sombre avec mise à l'échelle
  {
    name: "Dark",
    value: "dark-scaled",
  },
];

// Thèmes avec police monospace
const MONO_THEMES = [
  {
    name: "Mono",
    value: "mono-scaled",
  },
  // Thème monospace violet
  {
    name: "Purple Mono",
    value: "purple-mono-scaled",
  },
  // Thème monospace contrasté
  {
    name: "High Contrast",
    value: "high-contrast-mono-scaled",
  },
];

// Composant de sélection de thème
export function ThemeSelector() {
  // Utilise le hook personnalisé pour accéder au contexte de thème
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="theme-selector" className="sr-only">
        Theme
      </Label>
      <Select value={activeTheme} onValueChange={setActiveTheme}>
        <SelectTrigger
          id="theme-selector"
          size="sm"
          className="justify-start *:data-[slot=select-value]:w-12"
        >
          {/* Texte différent selon la taille de l'écran */}
          <span className="text-muted-foreground hidden sm:block">
            Select a theme:
          </span>
          <span className="text-muted-foreground block sm:hidden">Theme</span>
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent align="end">
          {/* Groupe de thèmes par défaut */}
          <SelectGroup>
            <SelectLabel>Default</SelectLabel>
            {DEFAULT_THEMES.map((theme) => (
              <SelectItem key={theme.name} value={theme.value}>
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          {/* Groupe de thèmes avec mise à l'échelle */}
          <SelectGroup>
            <SelectLabel>Scaled</SelectLabel>
            {SCALED_THEMES.map((theme) => (
              <SelectItem key={theme.name} value={theme.value}>
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
          {/* Groupe de thèmes monospace */}
          <SelectGroup>
            <SelectLabel>Monospaced</SelectLabel>
            {MONO_THEMES.map((theme) => (
              <SelectItem key={theme.name} value={theme.value}>
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}