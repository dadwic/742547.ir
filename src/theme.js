"use client";
import { Vazirmatn } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const vazirmatn = Vazirmatn({
  weight: ["300", "400", "500", "700"],
  subsets: ["arabic"],
  display: "swap",
});

const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: vazirmatn.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "hsla(215, 15%, 97%, 0.5)",
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
