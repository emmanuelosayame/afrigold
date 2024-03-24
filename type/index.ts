export interface DefaultSlice {
  appsModal: 'open' | 'closed' | 'never-opened';
  openAppsModal: () => void;
  closeAppsModal: () => void;
}
