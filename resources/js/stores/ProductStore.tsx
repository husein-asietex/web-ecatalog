import { create } from 'zustand'

export const useProductStore = create((set) => ({
  viewMode: 'list',
  toggleViewMode: () => set((state: any) => ({ viewMode: state.viewMode === 'list' ? 'grid' : 'list' })),
  setViewMode: (viewMode: any) => set({ viewMode }),
}));