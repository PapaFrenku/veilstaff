import Theme from './components';

const config = {
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
    title: "Система подбора, тестирования и оценки персонала!",
    description: "С помощью VeilStaff вы сможете быстро и легко выявлять конфликты, повышать вовлечённость, определять и удерживать самых талантливых сотрудников."
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ actions }) => {
        // state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
        // actions.router.set("/competences")
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },

    },
  },
};
export default config