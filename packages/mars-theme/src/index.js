import Theme from './components';

export default {
  name: "veilstaff-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
    },
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
};
