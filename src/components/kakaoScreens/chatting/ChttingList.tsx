import { ArrowUp, Annoyed, Plus } from "lucide-react";
import ProfileImage from "../../../assets/Images/profileImg01@3x.png";
import ChatRoomBubbleReceive from "../../../assets/Images/chatroomBubbleReceive01@2x.png";
import ChatRoomBubbleSend from "../../../assets/Images/chatroomBubbleSend01@2x.png";
import { SmallText } from "@/components/text/SmallText";
import SpeechBubble from "@/components/button/SpeechBubble";
import { useThemeStore } from "@/store/themeStore";
import { isActiveType } from "./type";

interface MessageProps {
  message: string;
  time: string;
  senderName?: string;
  isReceived: boolean;
  TextColor: string;
  Image: string;
  children?: React.ReactNode;
  chatList?: React.ReactNode;
}

interface ChatInputProps {
  placeholder: string;
}

const ProfileImageComponent = () => (
  <div
    className="w-6 h-6 rounded-md"
    style={{
      backgroundImage: `url(${ProfileImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
);

const ChatBubble = ({
  message,
  isReceived,
  TextColor,
  Image,
}: {
  message: string;
  isReceived: boolean;
  TextColor: string;
  Image: string;
}) => {
  const { messageCell } = useThemeStore();
  if (Image === "") {
    Image = isReceived ? ChatRoomBubbleReceive : ChatRoomBubbleSend;
  }
  return (
    <div
      className="flex items-center text-[10px] xl:text-[11px] rounded-sm px-0.5 w-fit"
      style={{
        borderImage: `url(${Image}) 30 30 30 30 fill stretch`,
        borderWidth: "10px",
        borderStyle: "solid",
        height: "24px",
        color: TextColor,
      }}
      key={Image}
    >
      {message}
    </div>
  );
};

const Message = ({ message, time, senderName, isReceived, children, chatList, TextColor, Image }: MessageProps) => {
  const { messageCell } = useThemeStore();
  return (
    <div
      className={`relative flex ${isReceived ? "gap-1.5" : "flex-col items-end gap-1"} px-1.5 xl:px-2 ${
        isReceived ? "mt-2 xl:mt-3" : ""
      }`}
    >
      {children}
      {isReceived && <ProfileImageComponent />}
      <div className={`flex flex-col gap-1 xl:gap-1.5 ${isReceived ? "" : "items-end"}`}>
        {isReceived && <SmallText>{senderName}</SmallText>}
        <ChatBubble message={message} isReceived={isReceived} TextColor={TextColor} Image={Image} />
        {chatList}
      </div>
    </div>
  );
};

const ChatInput = ({ placeholder }: ChatInputProps) => (
  <div className="flex gap-1.5 mt-auto py-2 px-2">
    <div className="flex justify-center items-center w-5 h-5 xl:w-6 xl:h-6 bg-gray-300/40 rounded-full">
      <Plus className="w-3 h-3 xl:w-4 xl:h-4 text-red-500/80" />
    </div>
    <div className="relative flex-1 h-5 xl:h-6 bg-gray-300/40 rounded-full flex items-center px-2 justify-start text-[9px] xl:text-[10px]">
      {placeholder}
      <div className="absolute right-1 top-0 bottom-0 flex items-center justify-center">
        <Annoyed className="w-3 h-3 xl:w-4 xl:h-4" />
      </div>
    </div>
    <div className="flex justify-center items-center w-5 h-5 xl:w-6 xl:h-6 bg-red-500/60 rounded-full">
      <ArrowUp className="w-3 h-3 xl:w-4 xl:h-4 text-white" />
    </div>
  </div>
);

export default function ChattingList({ isActive }: { isActive: isActiveType }) {
  const { messageCell } = useThemeStore();

  return (
    <div className="flex flex-col w-full h-full">
      {/* 받은 메시지 첫번째 */}
      <Message
        message="어피치어피치한"
        time="오후12:03"
        senderName="어피치"
        isReceived={true}
        TextColor={
          isActive["MessageCellStyle-Receive"]["-ios-text-color"]
            ? messageCell["MessageCellStyle-Receive"]["-ios-text-color"]
            : messageCell["MessageCellStyle-Receive"]["-ios-selected-text-color"]
        }
        Image={
          isActive["MessageCellStyle-Receive"]["-ios-background-image"]
            ? messageCell["MessageCellStyle-Receive"]["-ios-background-image"]
            : messageCell["MessageCellStyle-Receive"]["-ios-selected-background-image"]
        }
        children={
          <>
            <SpeechBubble direction="bottom" className="absolute top-0 left-20">
              1
            </SpeechBubble>
            <SpeechBubble direction="right" className="absolute top-4.5 left-3">
              2
            </SpeechBubble>
          </>
        }
        chatList={
          <div className="relative flex items-end gap-0.5">
            <ChatBubble
              message="채팅내용 입력하기"
              isReceived={true}
              TextColor={
                isActive["MessageCellStyle-Receive"]["-ios-text-color"]
                  ? messageCell["MessageCellStyle-Receive"]["-ios-text-color"]
                  : messageCell["MessageCellStyle-Receive"]["-ios-selected-text-color"]
              }
              Image={
                isActive["MessageCellStyle-Receive"]["-ios-background-image"]
                  ? messageCell["MessageCellStyle-Receive"]["-ios-background-image"]
                  : messageCell["MessageCellStyle-Receive"]["-ios-selected-background-image"]
              }
            />
            <div className="text-[7px] xl:text-[8px]">오후12:03</div>
            <div className="absolute top-0 bottom-0 flex items-center justify-center">
              <SpeechBubble direction="right" className="absolute top-1 -left-6">
                3
              </SpeechBubble>
            </div>
          </div>
        }
      />

      {/* 받은 메시지 두번째 */}
      <div className="my-0.5" />
      <Message
        message="어피치어피치한"
        time="오후12:03"
        senderName="어피치"
        isReceived={true}
        TextColor={
          isActive["MessageCellStyle-Receive"]["-ios-text-color"]
            ? messageCell["MessageCellStyle-Receive"]["-ios-text-color"]
            : messageCell["MessageCellStyle-Receive"]["-ios-selected-text-color"]
        }
        Image={
          isActive["MessageCellStyle-Receive"]["-ios-group-background-image"]
            ? messageCell["MessageCellStyle-Receive"]["-ios-group-background-image"]
            : messageCell["MessageCellStyle-Receive"]["-ios-group-selected-background-image"]
        }
        children={
          <>
            <SpeechBubble direction="bottom" className="absolute top-0 left-20">
              1
            </SpeechBubble>
            <SpeechBubble direction="right" className="absolute top-4.5 left-3">
              2
            </SpeechBubble>
          </>
        }
        chatList={
          <div className="relative flex items-end gap-0.5">
            <ChatBubble
              message="채팅내용 입력하기"
              isReceived={true}
              TextColor={
                isActive["MessageCellStyle-Receive"]["-ios-text-color"]
                  ? messageCell["MessageCellStyle-Receive"]["-ios-text-color"]
                  : messageCell["MessageCellStyle-Receive"]["-ios-selected-text-color"]
              }
              Image={
                isActive["MessageCellStyle-Receive"]["-ios-group-background-image"]
                  ? messageCell["MessageCellStyle-Receive"]["-ios-group-background-image"]
                  : messageCell["MessageCellStyle-Receive"]["-ios-group-selected-background-image"]
              }
            />
            <div className="">
              <div
                className="relative text-[7px] xl-text-[8px] text-red-500"
                style={{
                  color: messageCell["MessageCellStyle-Receive"]["-ios-unread-text-color"],
                }}
              >
                1
              </div>
              <div className="text-[7px] xl:text-[8px]">오후12:03</div>
            </div>
            <div className="absolute top-0 bottom-0 flex items-center justify-center">
              <SpeechBubble direction="right" className="absolute top-1 -left-6">
                3
              </SpeechBubble>
            </div>
            <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center">
              <SpeechBubble direction="left" className="absolute top-0 -left-6">
                4
              </SpeechBubble>
            </div>
          </div>
        }
      />

      {/* 보낸 메시지 첫번째 */}
      <div className="my-1.5" />
      <Message
        message="어피치어피치한"
        time="오후12:03"
        isReceived={false}
        TextColor={
          isActive["MessageCellStyle-Send"]["-ios-text-color"]
            ? messageCell["MessageCellStyle-Send"]["-ios-text-color"]
            : messageCell["MessageCellStyle-Send"]["-ios-selected-text-color"]
        }
        Image={
          isActive["MessageCellStyle-Send"]["-ios-background-image"]
            ? messageCell["MessageCellStyle-Send"]["-ios-background-image"]
            : messageCell["MessageCellStyle-Send"]["-ios-selected-background-image"]
        }
        children={
          <>
            <SpeechBubble direction="bottom" className="absolute -top-4 right-10">
              5
            </SpeechBubble>
            <SpeechBubble direction="left" className="absolute top-1 -right-6">
              6
            </SpeechBubble>
          </>
        }
        chatList={
          <div className="relative flex items-end gap-0.5">
            <div className="text-[7px] xl:text-[8px]">오후12:03</div>
            <ChatBubble
              message="채팅내용 입력하기"
              isReceived={false}
              TextColor={
                isActive["MessageCellStyle-Send"]["-ios-text-color"]
                  ? messageCell["MessageCellStyle-Send"]["-ios-text-color"]
                  : messageCell["MessageCellStyle-Send"]["-ios-selected-text-color"]
              }
              Image={
                isActive["MessageCellStyle-Send"]["-ios-background-image"]
                  ? messageCell["MessageCellStyle-Send"]["-ios-background-image"]
                  : messageCell["MessageCellStyle-Send"]["-ios-selected-background-image"]
              }
            />
            <div className="absolute top-0 bottom-0 flex items-center justify-center">
              <SpeechBubble direction="left" className="absolute top-1 -right-42">
                7
              </SpeechBubble>
            </div>
          </div>
        }
      />

      {/* 보낸 메시지 두번째 */}
      <div className="my-1.5" />
      <Message
        message="어피치어피치한"
        time="오후12:03"
        isReceived={false}
        TextColor={
          isActive["MessageCellStyle-Send"]["-ios-text-color"]
            ? messageCell["MessageCellStyle-Send"]["-ios-text-color"]
            : messageCell["MessageCellStyle-Send"]["-ios-selected-text-color"]
        }
        Image={
          isActive["MessageCellStyle-Send"]["-ios-group-background-image"]
            ? messageCell["MessageCellStyle-Send"]["-ios-group-background-image"]
            : messageCell["MessageCellStyle-Send"]["-ios-group-selected-background-image"]
        }
        children={
          <>
            <SpeechBubble direction="bottom" className="absolute -top-4 right-10">
              5
            </SpeechBubble>
            <SpeechBubble direction="left" className="absolute top-1 -right-6">
              6
            </SpeechBubble>
          </>
        }
        chatList={
          <div className="relative flex items-end gap-0.5">
            <div className="flex flex-col items-end">
              <div
                className="text-[7px] xl-text-[8px] text-red-500"
                style={{
                  color: messageCell["MessageCellStyle-Send"]["-ios-unread-text-color"],
                }}
              >
                1
              </div>
              <div className="text-[7px] xl:text-[8px]">오후12:03</div>
            </div>
            <ChatBubble
              message="채팅내용 입력하기"
              isReceived={false}
              TextColor={
                isActive["MessageCellStyle-Send"]["-ios-text-color"]
                  ? messageCell["MessageCellStyle-Send"]["-ios-text-color"]
                  : messageCell["MessageCellStyle-Send"]["-ios-selected-text-color"]
              }
              Image={
                isActive["MessageCellStyle-Send"]["-ios-group-background-image"]
                  ? messageCell["MessageCellStyle-Send"]["-ios-group-background-image"]
                  : messageCell["MessageCellStyle-Send"]["-ios-group-selected-background-image"]
              }
            />
            <div className="absolute top-0 bottom-0 flex items-center justify-center">
              <SpeechBubble direction="left" className="absolute top-1 -right-42">
                7
              </SpeechBubble>
            </div>
            <div className="absolute top-0 bottom-0 left-0 flex items-center justify-center">
              <SpeechBubble direction="right" className="absolute top-0 left-0">
                8
              </SpeechBubble>
            </div>
          </div>
        }
      />
      <ChatInput placeholder="카카오톡 테마 채팅 리스트 변경하기" />
    </div>
  );
}
