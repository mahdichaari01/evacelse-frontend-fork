import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { PropsWithChildren } from "react";
import { CacheProvider } from "@chakra-ui/next-js";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// const baseStyle = definePartsStyle((props) => ({
//   popper: {
//     zIndex: 50,
//   },
//   content: {
//     boxShadow: "lg",
//     w: "330px",
//     overflowY: "auto",
//     overflowX: "hidden",
//     maxHeight: "80vh",
//     padding: "0",
//   },
//   body: {
//     padding: "0",
//   },
// }));
//
// const sizes = {
//   xl: definePartsStyle({
//     content: {
//       w: "400px",
//     },
//   }),
//   third: definePartsStyle({
//     content: {
//       w: "calc(100vw / 3)",
//     },
//   }),
//   fit: definePartsStyle({
//     content: {
//       w: "fit-content",
//     },
//   }),
// };
//
// const rounded = definePartsStyle({
//   content: {
//     borderRadius: ".625rem",
//     zIndex: 20,
//   },
// });
//
// const variants = {
//   rounded,
// };
//
// export const popoverTheme = defineMultiStyleConfig({
//   baseStyle,
//   variants,
//   sizes,
// });

const theme = extendTheme(withDefaultColorScheme({ colorScheme: "teal" }), {
  colorScheme: "teal",
  components: {
    Drawer: {
      sizes: {
        menu: {
          dialog: {
            maxWidth: "5rem",
            borderRadius: ".625rem",
            margin: "0.5rem",
            overflow: "hidden",
            paddingY: "0.5rem",
          },
        },
      },
    },
    // Popover: popoverTheme,
  },

  fonts: {
    body: "Rubik, system-ui, sans-serif",
    heading: "Rubik, serif",
    mono: "Menlo, monospace",
  },
});

export default function ChakraThemeProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
