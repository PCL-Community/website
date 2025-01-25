import "./style.css";
import App from "./App.vue";
import { ViteSSG } from "vite-ssg";
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import "virtual:uno.css";
import { createPinia } from "pinia";
import { useNProgress } from "@vueuse/integrations/useNProgress";
import { createHead } from "@unhead/vue";

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    app.use(createPinia());
    app.use(createHead());
    if (isClient) {
      const { isLoading } = useNProgress(null, {
        showSpinner: false,
      });

      router.beforeEach(() => {
        isLoading.value = true;
      });

      router.afterEach(() => {
        isLoading.value = false;
      });
    }
  }
);
