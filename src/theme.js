import { createTheme } from '@mui/material/styles';

const INDIGO = {
  main: '#5a67d8',   // Slightly richer indigo
  dark: '#4c51bf',
  light: '#7f9cf5',
  violet: '#6b46c1',
};

const SLATE = {
  50: '#f8fafc',
  100: '#f1f5f9', // Lighter slate for softer backgrounds
  200: '#e2e8f0',
  500: '#64748b',
  900: '#0f172a',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: INDIGO.main,
      dark: INDIGO.dark,
      light: INDIGO.light,
      contrastText: '#ffffff',
    },
    secondary: {
      main: INDIGO.violet,
      contrastText: '#ffffff',
    },
    success: {
      main: '#10b981',
      light: '#d1fae5',
      dark: '#059669',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ef4444',
      light: '#fee2e2',
      dark: '#dc2626',
      contrastText: '#ffffff',
    },
    background: {
      default: SLATE[50],
      paper: 'rgba(255, 255, 255, 0.92)',
    },
    text: {
      primary: SLATE[900],
      secondary: SLATE[500],
    },
    divider: 'rgba(203, 213, 225, 0.6)',
    action: {
      hover: 'rgba(79, 70, 229, 0.06)',
      selected: 'rgba(79, 70, 229, 0.08)',
      focus: 'rgba(79, 70, 229, 0.12)',
    },
  },

  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 1.1,
      fontSize: '2.5rem',
      '@media (min-width:600px)': { fontSize: '3.25rem' },
      '@media (min-width:900px)': { fontSize: '3.5rem' },
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.2,
      fontSize: '1.75rem',
      '@media (min-width:600px)': { fontSize: '2rem' },
    },
    h3: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.25,
      fontSize: '1.5rem',
      '@media (min-width:600px)': { fontSize: '1.875rem' },
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '1.05rem',
    },
    subtitle1: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    subtitle2: {
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      fontSize: '0.72rem',
      color: SLATE[500],
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.65,
    },
    caption: {
      letterSpacing: '0.02em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  shadows: [
    'none',
    '0 1px 2px 0 rgba(15,23,42,0.03)',
    '0 1px 3px 0 rgba(15,23,42,0.05), 0 1px 2px -1px rgba(15,23,42,0.03)',
    '0 4px 6px -1px rgba(15,23,42,0.04), 0 2px 4px -2px rgba(15,23,42,0.03)',
    '0 8px 16px -4px rgba(15,23,42,0.06)',
    '0 10px 15px -3px rgba(15,23,42,0.05), 0 4px 6px -4px rgba(15,23,42,0.03)',
    '0 12px 20px -4px rgba(15,23,42,0.06), 0 4px 8px -4px rgba(15,23,42,0.03)',
    '0 16px 25px -5px rgba(15,23,42,0.06), 0 6px 10px -5px rgba(15,23,42,0.03)',
    '0 16px 48px -12px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,0.6)',
    '0 24px 35px -7px rgba(15,23,42,0.07), 0 10px 14px -6px rgba(15,23,42,0.03)',
    '0 28px 40px -8px rgba(15,23,42,0.08), 0 12px 16px -7px rgba(15,23,42,0.03)',
    '0 32px 45px -9px rgba(15,23,42,0.08)',
    '0 36px 50px -10px rgba(15,23,42,0.09)',
    '0 40px 55px -11px rgba(15,23,42,0.09)',
    '0 44px 60px -12px rgba(15,23,42,0.10)',
    '0 48px 65px -13px rgba(15,23,42,0.10)',
    '0 52px 70px -14px rgba(15,23,42,0.11)',
    '0 56px 75px -15px rgba(15,23,42,0.11)',
    '0 60px 80px -16px rgba(15,23,42,0.12)',
    '0 64px 85px -17px rgba(15,23,42,0.12)',
    '0 20px 40px -10px rgba(90,103,216,0.15)',
    '0 20px 40px -10px rgba(90,103,216,0.20)',
    '0 8px 24px -4px rgba(90,103,216,0.30)',
    '0 12px 28px -4px rgba(90,103,216,0.40)',
    '0 12px 32px -4px rgba(90,103,216,0.35)',
  ],

  custom: {
    gradients: {
      page: `linear-gradient(135deg, ${SLATE[50]} 0%, ${SLATE[100]} 100%)`,
      primary: `linear-gradient(135deg, ${INDIGO.main} 0%, ${INDIGO.light} 100%)`,
      primaryHover: `linear-gradient(135deg, ${INDIGO.dark} 0%, ${INDIGO.main} 100%)`,
      brand: `linear-gradient(135deg, ${INDIGO.main} 0%, ${INDIGO.violet} 100%)`,
      title: `linear-gradient(135deg, ${SLATE[900]} 0%, ${INDIGO.main} 100%)`,
      riskHigh: 'linear-gradient(135deg, rgba(254,226,226,0.92) 0%, rgba(255,241,242,0.96) 100%)',
      riskLow: 'linear-gradient(135deg, rgba(209,250,229,0.92) 0%, rgba(236,253,245,0.96) 100%)',
    },
    surfaces: {
      glass: 'rgba(255, 255, 255, 0.92)',
      glassBorder: 'rgba(203, 213, 225, 0.7)',
      inset: 'rgba(248, 250, 252, 0.9)',
      insetBorder: 'rgba(203, 213, 225, 0.55)',
      nav: 'rgba(255, 255, 255, 0.82)',
    },
    radii: {
      card: 20,
      inner: 12,
      pill: 9999,
    },
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    layout: {
      maxWidth: 1040,
      sectionGap: 6,
      cardPadding: { xs: 3, md: 4 },
    },
    shadows: {
      card: '0 16px 48px -12px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255,255,255,0.60)',
      nav: '0 1px 3px 0 rgba(15, 23, 42, 0.03)',
      navScrolled: '0 8px 24px -8px rgba(15, 23, 42, 0.10)',
      cta: '0 8px 24px -4px rgba(90, 103, 216, 0.35)',
      ctaHover: '0 12px 28px -4px rgba(90, 103, 216, 0.45)',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: (themeArg) => ({
        ':root': {
          '--hp-primary': themeArg.palette.primary.main,
          '--hp-primary-dark': themeArg.palette.primary.dark,
          '--hp-primary-light': themeArg.palette.primary.light,
          '--hp-text': themeArg.palette.text.primary,
          '--hp-glass': themeArg.custom.surfaces.glass,
          '--hp-glass-border': themeArg.custom.surfaces.glassBorder,
          '--hp-page-gradient': themeArg.custom.gradients.page,
          '--hp-brand-gradient': themeArg.custom.gradients.brand,
          '--hp-radius-card': `${themeArg.custom.radii.card}px`,
          '--hp-max-width': `${themeArg.custom.layout.maxWidth}px`,
          '--hp-transition': themeArg.custom.transition,
        },
        body: {
          background: themeArg.custom.gradients.page,
          minHeight: '100vh',
          overflowX: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '*:focus-visible': {
          outline: `2px solid ${themeArg.palette.primary.main}`,
          outlineOffset: 3,
        },
        a: {
          color: themeArg.palette.primary.main,
        },
      }),
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.custom.radii.pill,
          padding: '10px 28px',
          transition: t.custom.transition,
          '&:focus-visible': {
            outline: `2px solid ${t.palette.primary.main}`,
            outlineOffset: 3,
          },
        }),
        contained: ({ theme: t }) => ({
          backgroundImage: t.custom.gradients.primary,
          backgroundColor: t.palette.primary.main,
          boxShadow: t.custom.shadows.cta,
          '&:hover': {
            backgroundImage: t.custom.gradients.primaryHover,
            boxShadow: t.custom.shadows.ctaHover,
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&.Mui-disabled': {
            backgroundImage: 'none',
            backgroundColor: t.palette.action.disabledBackground,
            boxShadow: 'none',
            color: t.palette.action.disabled,
          },
        }),
        text: ({ theme: t }) => ({
          '&:hover': {
            backgroundColor: t.palette.action.hover,
            transform: 'none',
          },
        }),
        sizeLarge: {
          padding: '14px 36px',
          fontSize: '1rem',
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.custom.radii.pill,
          fontWeight: 600,
          transition: t.custom.transition,
        }),
        clickable: ({ theme: t }) => ({
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: t.shadows[3],
          },
          '&:focus-visible': {
            outline: `2px solid ${t.palette.primary.main}`,
            outlineOffset: 2,
          },
        }),
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: 10,
          backgroundColor: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(8px)',
          transition: t.custom.transition,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: t.palette.primary.main,
          },
          '&.Mui-focused': {
            backgroundColor: 'rgba(255,255,255,0.95)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: t.palette.primary.main,
            borderWidth: 2,
            boxShadow: `0 0 0 4px ${t.palette.action.focus}`,
          },
        }),
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.custom.radii.card,
          background: t.custom.surfaces.glass,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `1px solid ${t.custom.surfaces.glassBorder}`,
          boxShadow: t.custom.shadows.card,
        }),
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        outlined: ({ theme: t }) => ({
          background: t.custom.surfaces.inset,
          borderColor: t.custom.surfaces.insetBorder,
          borderRadius: t.custom.radii.inner,
        }),
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.shape.borderRadius,
        }),
        standardError: ({ theme: t }) => ({
          border: `1px solid ${t.palette.error.main}33`,
        }),
      },
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: 'inherit',
      },
      styleOverrides: {
        root: ({ theme: t }) => ({
          background: t.custom.surfaces.nav,
          color: t.palette.text.primary,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${t.palette.divider}`,
          boxShadow: t.custom.shadows.nav,
          transition: t.custom.transition,
        }),
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          height: 8,
          borderRadius: t.custom.radii.pill,
          backgroundColor: t.palette.action.focus,
        }),
        bar: ({ theme: t }) => ({
          borderRadius: t.custom.radii.pill,
          backgroundColor: t.palette.primary.main,
        }),
      },
    },

    MuiLink: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          color: t.palette.primary.main,
          fontWeight: 600,
          textDecorationColor: 'transparent',
          transition: t.custom.transition,
          '&:hover': {
            textDecoration: 'underline',
          },
        }),
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: 8,
          transition: t.custom.transition,
          '&.Mui-selected': {
            backgroundColor: t.palette.action.selected,
            color: t.palette.primary.main,
            '& .MuiListItemText-primary': {
              fontWeight: 700,
              color: t.palette.primary.main,
            },
          },
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          transition: t.custom.transition,
          '&:hover': {
            backgroundColor: t.palette.action.hover,
          },
          '&:focus-visible': {
            outline: `2px solid ${t.palette.primary.main}`,
            outlineOffset: 2,
          },
        }),
      },
    },
  },
});

export default theme;
