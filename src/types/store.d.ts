import { iconTextType } from ".";

// root

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}

// module/app
export interface AppState {
  iconText?: iconTextType;
  isFullScreen?: boolean;
  isLeftDrawer?: boolean;
  isSmallScreen?: boolean;
}

export interface AppMutation {
  setIconText: (payload?: iconTextType) => void;
  setFullScreen: (payload?: boolean) => void;
  setLeftDrawer: (payload?: boolean) => void;
  setSmallScreen: () => void;
}
