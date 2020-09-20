import React, { PropsWithChildren, useMemo } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { LightThemeColors } from "../Colors";
import { elevationBase } from "../Elevation/elevationBase";

export interface ElevationProps
  extends Omit<PropsWithChildren<ViewProps>, "style"> {
  elevation?: "ground" | "low" | "medium" | "high";
  borderRadius?: 4 | 6 | 8;
}

export function Elevation({
  borderRadius = 4,
  elevation,
  children,
}: ElevationProps) {
  const { root } = useMemo(
    () =>
      StyleSheet.create({
        root: { borderRadius, backgroundColor: LightThemeColors.white[100] },
      }),
    [borderRadius]
  );

  const elevationVariant =
    elevation === "ground"
      ? elevationBase[0]
      : elevation === "low"
      ? elevationBase[1]
      : elevation === "medium"
      ? elevationBase[3]
      : elevationBase[5];

  return (
    <View style={StyleSheet.flatten([elevationVariant.outer, root])}>
      <View style={StyleSheet.flatten([elevationVariant.inner, root])}>
        {children}
      </View>
    </View>
  );
}