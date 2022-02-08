import {
  MenuComponent,
  ScrollComponent,
  StickyComponent,
  ToggleComponent,
} from "@/assets/ts/components";

/**
 * Initialize KeenThemes custom components
 */
setTimeout(() => {
  ToggleComponent.bootstrap();
  StickyComponent.bootstrap();
  MenuComponent.bootstrap();
  ScrollComponent.bootstrap();
}, 200);
