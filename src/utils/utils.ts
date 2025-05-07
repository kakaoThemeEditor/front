export function getOpacity(opacity: string | number) {
  const newOpacity = 1 - Number(opacity);
  return newOpacity > 0.5 ? newOpacity : 0.5;
}

export const base64ToFile = (base64Url: string): File => {
  // base64 URL에서 실제 데이터 부분만 추출
  const base64Data = base64Url.split(",")[1];
  const byteCharacters = atob(base64Data);
  const byteArrays = [];

  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays.push(byteCharacters.charCodeAt(i));
  }

  const byteArray = new Uint8Array(byteArrays);
  const blob = new Blob([byteArray], { type: "image/jpeg" });
  return new File([blob], "image.jpg", { type: "image/jpeg" });
};
