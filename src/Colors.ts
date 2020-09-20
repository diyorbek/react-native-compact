import { useColorScheme } from "react-native";

type ColorName = "blue" | "dark" | "red" | "white";

interface ColorShade {
  [50]: string;
  [75]: string;
  [80]: string;
  [100]: string;
  [200]: string;
  [250]: string;
  [300]: string;
  [400]: string;
  [500]: string;
}

type Palette = Record<ColorName, Partial<ColorShade>>;

export const LightThemeColors: Palette = {
  blue: {
    [50]: "#DEEBFF",
    [75]: "#B2D4FF",
    [100]: "#4C9AFF",
    [200]: "#2684FF",
    [300]: "#0065FF",
    [400]: "#0052CC",
    [500]: "#0747A6",
  },
  dark: {
    [50]: "#F5F7FA",
    [100]: "#DDE4EE",
    [200]: "#AFBCCF",
    [250]: "#8B96A7",
    [300]: "#636F82",
    [500]: "#141C29",
  },
  red: {
    [50]: "#FFEBE5",
    [75]: "#FFBDAD",
    [100]: "#FF8F73",
    [200]: "#FF7452",
    [300]: "#FF5630",
    [400]: "#DE350B",
    [500]: "#BF2600",
  },
  white: {
    [80]: "#FFFFFFCC",
    [100]: "#FFFFFF",
  },
};

export const DarkThemeColors: Palette = {
  blue: {
    [50]: "#DEEBFF",
    [75]: "#B2D4FF",
    [100]: "#4C9AFF",
    [200]: "#2684FF",
    [300]: "#0065FF",
    [400]: "#0052CC",
    [500]: "#0747A6",
  },
  dark: {
    [50]: "#F5F7FA",
    [100]: "#DDE4EE",
    [200]: "#AFBCCF",
    [250]: "#8B96A7",
    [300]: "#636F82",
    [500]: "#141C29",
  },
  red: {
    [50]: "#FFEBE5",
    [75]: "#FFBDAD",
    [100]: "#FF8F73",
    [200]: "#FF7452",
    [300]: "#FF5630",
    [400]: "#DE350B",
    [500]: "#BF2600",
  },
  white: {
    [80]: "#FFFFFFCC",
    [100]: "#FFFFFF",
  },
};

export function useColors() {
  const colorScheme = useColorScheme();

  if (!colorScheme) {
    return LightThemeColors;
  }

  return colorScheme === "light" ? LightThemeColors : DarkThemeColors;
}
