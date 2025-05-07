//prettier-ignore
export interface ThemeValues {
  "TabbarStyle-Main": {
    "-ios-background-image": string;
    "background-color": string;
    "-ios-friends-normal-icon-image": string;
    "-ios-friends-selected-icon-image": string;
    "-ios-chats-normal-icon-image": string;
    "-ios-chats-selected-icon-image": string;
    "-ios-openchats-normal-icon-image": string;
    "-ios-openchats-selected-icon-image": string;
    "-ios-shopping-normal-icon-image": string;
    "-ios-shopping-selected-icon-image": string;
    "-ios-more-normal-icon-image": string;
    "-ios-more-selected-icon-image": string;
  };
  "DefaultProfileStyle": {
    "-ios-background-image": string;
  }
  "FeatureStyle-Primary":{
    "-ios-text-color": string;
  }
  "BottomBannerStyle":{
    "background-color": string
  }
}

export interface IsActive {
  "TabbarStyle-Main": {
    "-ios-friends-normal-icon-image": boolean;
    "-ios-chats-normal-icon-image": boolean;
    "-ios-openchats-normal-icon-image": boolean;
    "-ios-shopping-normal-icon-image": boolean;
    "-ios-more-normal-icon-image": boolean;
  };
}
