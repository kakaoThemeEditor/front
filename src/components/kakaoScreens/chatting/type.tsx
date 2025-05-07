export interface MessageCellStyleType {
  "MessageCellStyle-Send": {
    "-ios-background-image": string;
    "-ios-selected-background-image": string;
    "-ios-title-edgeinsets": string;
    "-ios-group-background-image": string;
    "-ios-group-selected-background-image": string;
    "-ios-group-title-edgeinsets": string;
    "-ios-text-color": string;
    "-ios-selected-text-color": string;
    "-ios-unread-text-color": string;
  };
  "MessageCellStyle-Receive": {
    "-ios-background-image": string;
    "-ios-selected-background-image": string;
    "-ios-title-edgeinsets": string;
    "-ios-group-background-image": string;
    "-ios-group-selected-background-image": string;
    "-ios-group-title-edgeinsets": string;
    "-ios-text-color": string;
    "-ios-selected-text-color": string;
    "-ios-unread-text-color": string;
  };
}

export interface isActiveType {
  "MessageCellStyle-Send": {
    "-ios-background-image": boolean;
    "-ios-group-background-image": boolean;
    "-ios-text-color": boolean;
  };
  "MessageCellStyle-Receive": {
    "-ios-background-image": boolean;
    "-ios-group-background-image": boolean;
    "-ios-text-color": boolean;
  };
}
