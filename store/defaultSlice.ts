import { StateCreator } from 'zustand';
import { DefaultSlice } from '../type';

export const defaultSlice: StateCreator<
  DefaultSlice,
  [['zustand/immer', never]],
  [],
  DefaultSlice
> = (set, get) => ({
  appsModal: 'never-opened',
  openAppsModal: () => set({ appsModal: 'open' }),
  closeAppsModal: () => set({ appsModal: 'closed' }),
});
