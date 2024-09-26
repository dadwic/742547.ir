import * as React from "react";
import localFont from "next/font/local";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";

const Vazirmatn = localFont({
  src: "./Vazirmatn-Regular.woff2",
  variable: "--font-vazirmatn",
  display: "swap",
});

export default function RootLayout(props) {
  return (
    <html lang="fa" dir="rtl" className={Vazirmatn.className}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
