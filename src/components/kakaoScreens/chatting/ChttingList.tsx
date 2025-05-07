import { ArrowUp, CameraIcon, ChevronUp, PaperclipIcon, Annoyed, Plus } from "lucide-react";
import ProfileImage from "../../../assets/Images/profileImg01@3x.png";
import ChatRoomBubbleReceive from "../../../assets/Images/chatroomBubbleReceive01@2x.png";
import ChatRoomBubbleSend from "../../../assets/Images/chatroomBubbleSend01@2x.png";
import { SmallText } from "@/components/common/SmallText";
import SpeechBubble from "@/components/button/SpeechBubble";

interface MessageProps {
  message: string;
  time: string;
  senderName: string;
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

const ChatBubble = ({ message, isReceived }: { message: string; isReceived: boolean }) => (
  <div
    className="flex items-center text-[10px] xl:text-[11px] rounded-sm px-0.5 w-fit"
    style={{
      borderImage: `url(${isReceived ? ChatRoomBubbleReceive : ChatRoomBubbleSend}) 30 30 30 30 fill stretch`,
      borderWidth: "10px",
      borderStyle: "solid",
      height: "24px",
    }}
  >
    {message}
  </div>
);

const ReceivedMessage = ({ message, time, senderName, children, chatList }: MessageProps) => (
  <div className="relative flex gap-1.5 px-1.5 xl:px-2 mt-2 xl:mt-3">
    {children}
    <ProfileImageComponent />
    <div className="flex flex-col gap-1 xl:gap-1.5">
      <SmallText>{senderName}</SmallText>
      <ChatBubble message={message} isReceived={true} />
      {chatList}
    </div>
  </div>
);

const SentMessage = ({ message, time, children, chatList }: Omit<MessageProps, "senderName">) => (
  <div className="relative flex flex-col items-end gap-1 px-1.5 xl:px-2">
    {children}
    <ChatBubble message={message} isReceived={false} />
    {chatList}
  </div>
);

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

export default function ChattingList() {
  return (
    <div className="flex flex-col w-full h-full">
      <ReceivedMessage
        message="어피치어피치한"
        time="오후12:03"
        senderName="어피치"
        children={
          <>
            <SpeechBubble direction="bottom" className="absolute top-0 left-20">
              2
            </SpeechBubble>
            <SpeechBubble direction="right" className="absolute top-4.5 left-3">
              3
            </SpeechBubble>
          </>
        }
        chatList={
          <div className="relative flex items-end gap-0.5">
            <ChatBubble message="채팅내용 입력하기" isReceived={true} />
            <div className="text-[7px] xl:text-[8px]">오후12:03</div>
            <div className="absolute top-0 bottom-0 flex items-center justify-center">
              <SpeechBubble direction="right" className="absolute top-1 -left-6">
                4
              </SpeechBubble>
            </div>
          </div>
        }
      />
      <div className="my-0.5" />
      <ReceivedMessage
        message="어피치어피치한"
        time="오후12:03"
        senderName="어피치"
        children={
          <>
            <SpeechBubble direction="bottom" className="absolute top-0 left-20">
              2
            </SpeechBubble>
            <SpeechBubble direction="right" className="absolute top-4.5 left-3">
              3
            </SpeechBubble>
          </>
        }
        chatList={
          <div className="relative flex items-end gap-0.5">
            <ChatBubble message="채팅내용 입력하기" isReceived={true} />
            <div className="">
              <div className="relative text-[7px] xl-text-[8px] text-red-500">1</div>
              <div className="text-[7px] xl:text-[8px]">오후12:03</div>
            </div>
            <div className="absolute top-0 bottom-0 flex items-center justify-center">
              <SpeechBubble direction="right" className="absolute top-1 -left-6">
                4
              </SpeechBubble>
            </div>
            <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center">
              <SpeechBubble direction="left" className="absolute top-0 -left-6">
                5
              </SpeechBubble>
            </div>
          </div>
        }
      />
      <div className="my-1.5" />
      <SentMessage
        message="어피치어피치한"
        time="오후12:03"
        children={
          <>
            <SpeechBubble direction="bottom" className="absolute -top-4 right-10">
              6
            </SpeechBubble>
            <SpeechBubble direction="left" className="absolute top-1 -right-6">
              7
            </SpeechBubble>
          </>
        }
        chatList={
          <div className="relative flex items-end gap-0.5">
            <div className="text-[7px] xl:text-[8px]">오후12:03</div>
            <ChatBubble message="채팅내용 입력하기" isReceived={false} />
            <div className="absolute top-0 bottom-0 flex items-center justify-center">
              <SpeechBubble direction="left" className="absolute top-1 -right-42">
                8
              </SpeechBubble>
            </div>
          </div>
        }
      />
      <div className="my-1.5" />
      <SentMessage
        message="어피치어피치한"
        time="오후12:03"
        children={
          <>
            <SpeechBubble direction="bottom" className="absolute -top-4 right-10">
              6
            </SpeechBubble>
            <SpeechBubble direction="left" className="absolute top-1 -right-6">
              7
            </SpeechBubble>
          </>
        }
        chatList={
          <div className="relative flex items-end gap-0.5">
            <div className="flex flex-col items-end">
              <div className="text-[7px] xl-text-[8px] text-red-500">1</div>
              <div className="text-[7px] xl:text-[8px]">오후12:03</div>
            </div>
            <ChatBubble message="채팅내용 입력하기" isReceived={false} />
            <div className="absolute top-0 bottom-0 flex items-center justify-center">
              <SpeechBubble direction="left" className="absolute top-1 -right-42">
                8
              </SpeechBubble>
            </div>
            <div className="absolute top-0 bottom-0 left-0 flex items-center justify-center">
              <SpeechBubble direction="right" className="absolute top-0 left-0">
                9
              </SpeechBubble>
            </div>
          </div>
        }
      />
      <ChatInput placeholder="카카오톡 테마 채팅 리스트 변경하기" />
    </div>
  );
}
