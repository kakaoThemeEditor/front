import { create } from "zustand";
import { MainViewStyle2Theme } from "../components/kakaoScreens/MainViewStyle2/type";
import { MainViewStyle1Theme } from "../components/kakaoScreens/MainViewStyle1/type";
import { MainViewStyleSecondary } from "../components/kakaoScreens/MainViewStyle3/type";
import { InputBarStyleType } from "../components/kakaoScreens/InputBarStyle/type";
import { MessageCellStyleType } from "../components/kakaoScreens/chatting/type";
import { AddFriendType } from "../components/kakaoScreens/addFriend/type";
import { MessageNotificationBarType } from "../components/kakaoScreens/messageNotification/type";
import { PasscodeTheme as PasscodeTheme } from "../components/kakaoScreens/passcode/type";
import { TabbarTheme, IsActive } from "@/components/kakaoScreens/tabbar/type";

// 각 테마의 초기값 정의
const initialMv2Theme: MainViewStyle2Theme = {
  "MainViewStyle-Primary": {
    "background-color": "",
    "-ios-background-image": "",
    "-ios-text-color": "",
    "-ios-highlighted-text-color": "",
    "-ios-description-text-color": "",
    "-ios-description-highlighted-text-color": "",
  },
  "SectionTitleStyle-Main": {
    "border-color": "#E5E5E5",
    "border-alpha": 1,
    "-ios-text-color": "",
    "-ios-text-alpha": 1,
  },
};

const initialMv1Theme: MainViewStyle1Theme = {
  "HeaderStyle-Main": {
    "-ios-text-color": "",
  },
  "MainViewStyle-Primary": {
    "-ios-paragraph-text-color": "",
    "-ios-paragraph-highlighted-text-color": "",
    "-ios-normal-background-color": "",
    "-ios-normal-background-alpha": "1",
    "-ios-selected-background-color": "#F5F5F5",
    "-ios-selected-background-alpha": "1",
  },
};

const initialMvSecondary: MainViewStyleSecondary = {
  "MainViewStyle-Secondary": {
    "background-color": "",
  },
};

const initialInputBarStyle: InputBarStyleType = {
  "InputBarStyle-Chat": {
    "background-color": "",
    "-ios-send-normal-background-color": "#FEE500",
    "-ios-send-highlighted-background-color": "#FEE500",
    "-ios-send-normal-foreground-color": "",
    "-ios-send-highlighted-foreground-color": "",
    "-ios-button-normal-foreground-color": "",
    "-ios-button-highlighted-foreground-color": "",
    "-ios-button-text-color": "",
    "-ios-button-normal-background-color": "",
  },
};

const initialMessageCell: MessageCellStyleType = {
  "MessageCellStyle-Send": {
    "-ios-background-image": "",
    "-ios-selected-background-image": "",
    "-ios-title-edgeinsets": "",
    "-ios-group-background-image": "",
    "-ios-group-selected-background-image": "",
    "-ios-group-title-edgeinsets": "",
    "-ios-text-color": "",
    "-ios-selected-text-color": "",
    "-ios-unread-text-color": "",
  },
  "MessageCellStyle-Receive": {
    "-ios-background-image": "",
    "-ios-selected-background-image": "",
    "-ios-title-edgeinsets": "",
    "-ios-group-background-image": "",
    "-ios-group-selected-background-image": "",
    "-ios-group-title-edgeinsets": "",
    "-ios-text-color": "",
    "-ios-selected-text-color": "",
    "-ios-unread-text-color": "",
  },
};

const initialAddFriend: AddFriendType = {
  "ButtonStyle-AddFriend": {
    "-ios-image": "",
  },
};

const initialMessageNotification: MessageNotificationBarType = {
  "BackgroundStyle-ChatRoom": {
    "background-color": "",
    "-ios-background-image": "",
  },
  "BackgroundStyle-MessageNotificationBar": {
    "background-color": "",
  },
  "LabelStyle-MessageNotificationBarName": {
    "-ios-text-color": "",
  },
  "LabelStyle-MessageNotificationBarMessage": {
    "-ios-text-color": "",
  },
  "BackgroundStyle-DirectShareBar": {
    "background-color": "",
  },
  "LabelStyle-DirectShareBarName": {
    "-ios-text-color": "",
  },
  "LabelStyle-DirectShareBarMessage": {
    "-ios-text-color": "",
  },
};

const initialPasscode: PasscodeTheme = {
  "BackgroundStyle-Passcode": {
    "background-color": "",
    "-ios-background-image": "",
  },
  "LabelStyle-PasscodeTitle": {
    "-ios-text-color": "",
  },
  "BulletStyle-Passcode": {
    "-ios-bullet-first-image": "",
    "-ios-bullet-second-image": "",
    "-ios-bullet-third-image": "",
    "-ios-bullet-fourth-image": "",
    "-ios-bullet-selected-first-image": "",
    "-ios-bullet-selected-second-image": "",
    "-ios-bullet-selected-third-image": "",
    "-ios-bullet-selected-fourth-image": "",
    "-ios-keypad-background-color": "",
    "-ios-keypad-text-normal-color": "",
    "-ios-keypad-number-highlighted-image": "",
  },
};

const initialTabbar: TabbarTheme = {
  "TabbarStyle-Main": {
    "-ios-background-image": "",
    "background-color": "",
    "-ios-friends-normal-icon-image": "",
    "-ios-friends-selected-icon-image": "",
    "-ios-chats-normal-icon-image": "",
    "-ios-chats-selected-icon-image": "",
    "-ios-openchats-normal-icon-image": "",
    "-ios-openchats-selected-icon-image": "",
    "-ios-shopping-normal-icon-image": "",
    "-ios-shopping-selected-icon-image": "",
    "-ios-more-normal-icon-image": "",
    "-ios-more-selected-icon-image": "",
  },
  DefaultProfileStyle: {
    "-ios-background-image": "",
  },
  "FeatureStyle-Primary": {
    "-ios-text-color": "",
  },
  BottomBannerStyle: {
    "background-color": "",
  },
};

const initialIsActive: IsActive = {
  "TabbarStyle-Main": {
    "-ios-friends-normal-icon-image": true,
    "-ios-chats-normal-icon-image": true,
    "-ios-openchats-normal-icon-image": true,
    "-ios-shopping-normal-icon-image": true,
    "-ios-more-normal-icon-image": true,
  },
};

interface ThemeStore {
  // 테마 상태들
  mv2Theme: MainViewStyle2Theme;
  mv1Theme: MainViewStyle1Theme;
  mvSecondary: MainViewStyleSecondary;
  inputBarStyle: InputBarStyleType;
  messageCell: MessageCellStyleType;
  addFriend: AddFriendType;
  messageNotification: MessageNotificationBarType;
  passcode: PasscodeTheme;
  tabbar: TabbarTheme;
  isActive: IsActive;

  // 상태 업데이트 함수들
  setMv2Theme: (theme: MainViewStyle2Theme) => void;
  setMv1Theme: (theme: MainViewStyle1Theme) => void;
  setMvSecondary: (theme: MainViewStyleSecondary) => void;
  setInputBarStyle: (theme: InputBarStyleType) => void;
  setMessageCell: (theme: MessageCellStyleType) => void;
  setAddFriend: (theme: AddFriendType) => void;
  setMessageNotification: (theme: MessageNotificationBarType) => void;
  setPasscode: (theme: PasscodeTheme) => void;
  setTabbar: (theme: TabbarTheme) => void;
  setIsActive: (isActive: IsActive) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  // 초기 상태
  mv2Theme: initialMv2Theme,
  mv1Theme: initialMv1Theme,
  mvSecondary: initialMvSecondary,
  inputBarStyle: initialInputBarStyle,
  messageCell: initialMessageCell,
  addFriend: initialAddFriend,
  messageNotification: initialMessageNotification,
  passcode: initialPasscode,
  tabbar: initialTabbar,
  isActive: initialIsActive,

  // 상태 업데이트 함수들
  setMv2Theme: (theme) => set({ mv2Theme: theme }),
  setMv1Theme: (theme) => set({ mv1Theme: theme }),
  setMvSecondary: (theme) => set({ mvSecondary: theme }),
  setInputBarStyle: (theme) => set({ inputBarStyle: theme }),
  setMessageCell: (theme) => set({ messageCell: theme }),
  setAddFriend: (theme) => set({ addFriend: theme }),
  setMessageNotification: (theme) => set({ messageNotification: theme }),
  setPasscode: (theme) => set({ passcode: theme }),
  setTabbar: (theme) => set({ tabbar: theme }),
  setIsActive: (isActive) => set({ isActive }),
}));
