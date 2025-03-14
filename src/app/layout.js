import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Logo from "@/components/Logo";
import Rtl from "@/components/Rtl";
import theme from "@/theme";

export default function RootLayout(props) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Logo />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Rtl>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {props.children}
            </ThemeProvider>
          </Rtl>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
