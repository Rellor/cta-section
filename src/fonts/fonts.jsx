import localFont from "next/font/local";

export const ttCommons = localFont({
  src: [
    {
      path: "./TT-Commons-Pro-Normal.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./TT-Commons-Pro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./TT-Commons-Pro-DemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-tt-commons",
  display: "swap",
});

export const gtAlpina = localFont({
  src: [
    {
      path: "./GTAlpina-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-gt-alpina",
  display: "swap",
});
