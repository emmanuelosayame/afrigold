import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { DefaultSlice } from '../type';
import { defaultSlice } from './defaultSlice';
import { persist } from 'zustand/middleware';

type CombinedState = DefaultSlice;

export const useStore = create<CombinedState>()(
  immer(
    persist(
      (...args) => ({
        ...defaultSlice(...args),
      }),
      {
        name: 'afrigold',
        partialize: (state) => ({ appsModal: state.appsModal }),
        // getStorage: () => storage as StateStorage,
      }
    )
  )
);
