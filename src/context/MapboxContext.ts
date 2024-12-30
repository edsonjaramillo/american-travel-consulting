import { create } from 'zustand';

type Active = {
  isPopupOpen: true;
  marker: MarkerState;
};

type Inactive = {
  isPopupOpen: false;
  marker: undefined;
};

type State = Active | Inactive;

type MarkerState = {
  name: string;
  link?: string;
  latitude: number;
  longitude: number;
};

type Actions = {
  closePopup: () => void;
  setPopup: (marker: MarkerState) => void;
};

export const useMapbox = create<State & Actions>((set) => ({
  isPopupOpen: false,
  marker: undefined,
  closePopup: () => set({ isPopupOpen: false, marker: undefined }),
  setPopup: (marker) => set({ isPopupOpen: true, marker }),
}));
