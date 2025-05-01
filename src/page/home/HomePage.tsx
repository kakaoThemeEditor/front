import SpeechBubble from "@/components/button/SpeechBubble";

export const HomePage = () => {
  return (
    <div>
      <div className="space-y-4 p-6">
        <div className="w-8 h-4 ">
          <SpeechBubble direction="top">1</SpeechBubble>
        </div>

        <div className="w-8 h-4 ">
          <SpeechBubble direction="bottom">1</SpeechBubble>
        </div>

        <div className="w-8 h-4 ">
          <SpeechBubble direction="left">1</SpeechBubble>
        </div>

        <div className="w-8 h-4 ">
          <SpeechBubble direction="right">1</SpeechBubble>
        </div>
      </div>
    </div>
  );
};
