"use client";
import { Roboto, Vazirmatn } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: `${vazirmatn.style.fontFamily}, ${roboto.style.fontFamily}`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "hsla(215, 15%, 97%, 0.5)",
        },
        a: {
          color: "#ce0e2d",
          cursor: "pointer",
          textDecoration: "none",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
