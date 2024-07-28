import figlet from "figlet";

export const displayBanner = (text: string) => {
  figlet(text, { font: "Standard" }, (err, data) => {
    if (err) {
      return;
    }
    console.log(data);
  });
};
