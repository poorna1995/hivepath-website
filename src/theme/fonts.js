import Inter from "../fonts/Inter_variable.ttf";

const interThin = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 100,
  src: `
      local('Inter'),
      local('Inter-Regular'),
      url(${Inter}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const interExtraLight = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 200,
  src: `
      local('Inter'),
      local('Inter-Regular'),
      url(${Inter}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
const interLight = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
      local('Inter'),
      local('Inter-Regular'),
      url(${Inter}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const interRegular = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
      local('Inter'),
      local('Inter-Regular'),
      url(${Inter}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const interMedium = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
      local('Inter'),
      local('Inter-Regular'),
      url(${Inter}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const interSemiBold = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `
      local('Inter'),
      local('Inter-Regular'),
      url(${Inter}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
const interBold = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
      local('Inter'),
      local('Inter-Regular'),
      url(${Inter}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
const interExtraBold = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 800,
  src: `
      local('Inter'),
      local('Inter-Regular'),
      url(${Inter}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const interBlack = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 900,
  src: `
      local('Inter'),
      local('Inter-Regular'),
      url(${Inter}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const fontfaces = [
  interRegular,
  interThin,
  interExtraLight,
  interLight,
  interMedium,
  interSemiBold,
  interBold,
  interExtraBold,
  interBlack,
];

export default fontfaces;
