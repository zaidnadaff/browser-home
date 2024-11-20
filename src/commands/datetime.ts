const dateTimeObj = {
  formats: [
    "🕐 Time traveler reporting: ",
    "⏰ Current temporal coordinates: ",
    "🌈 Moment snapshot: ",
    "✨ Universe timestamp: ",
    "🚀 Cosmic clock says: ",
  ],
};

export const createDateTime = (): string[] => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();

  const r = Math.floor(Math.random() * dateTimeObj.formats.length);

  return [
    "<br>",
    `${dateTimeObj.formats[r]}${day}.${month}.${year} ${hours}:${minutes}`,
    "<br>",
  ];
};
