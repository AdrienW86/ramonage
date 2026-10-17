import { regulationGuides } from './articles/reglementation';
import { practicalGuides } from './articles/pratique';
import { bistreGuides } from './articles/bistre';
import { applianceGuides } from './articles/appareils';
import { safetyLocalGuides } from './articles/securite-local';
export { sources } from './sources';
export { categories } from './editorial-types';
export type { Guide, Category } from './editorial-types';
export const guides = [
  ...regulationGuides,
  ...practicalGuides,
  ...bistreGuides,
  ...applianceGuides,
  ...safetyLocalGuides,
];
