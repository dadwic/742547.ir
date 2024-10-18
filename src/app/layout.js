import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppLoading from "@/components/AppLoading";
import Rtl from "@/components/Rtl";
import theme from "@/theme";

export default function RootLayout(props) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppLoading>
            <Rtl>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
              </ThemeProvider>
            </Rtl>
          </AppLoading>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
