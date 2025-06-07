
export interface Section {
  id: string;
  name: string;
  component: string;
  enabled: boolean;
  order: number;
}

export const defaultSections: Section[] = [
  { id: "hero", name: "Hero", component: "Hero", enabled: true, order: 1 },
  { id: "about", name: "About", component: "About", enabled: true, order: 2 },
  { id: "experience", name: "Experience", component: "Experience", enabled: true, order: 3 },
  { id: "projects", name: "Projects", component: "Projects", enabled: true, order: 4 },
  { id: "skills", name: "Skills", component: "Skills", enabled: true, order: 5 },
  { id: "contact", name: "Contact", component: "Contact", enabled: true, order: 6 },
];

export const colorThemes = {
  blue: {
    primary: "blue-600",
    primaryHover: "blue-700",
    primaryLight: "blue-100",
    primaryDark: "blue-900",
    accent: "blue-400",
  },
  purple: {
    primary: "purple-600",
    primaryHover: "purple-700",
    primaryLight: "purple-100",
    primaryDark: "purple-900",
    accent: "purple-400",
  },
  green: {
    primary: "green-600",
    primaryHover: "green-700",
    primaryLight: "green-100",
    primaryDark: "green-900",
    accent: "green-400",
  },
};
