import icons from "./icons";

const getRandomToNumber = (number) => Math.ceil(Math.random() * number);

const MAX_SIZE = 8;
const getMap = () => {
  const height = getRandomToNumber(MAX_SIZE);
  let localIcons = [...icons];

  const map = new Array(height).fill(undefined);

  for (let row = 0; row < height; row++) {
    map[row] = [];

    const width = getRandomToNumber(MAX_SIZE);

    for (let column = 0; column < width; column++) {
      map[row][column] = {
        iconName: localIcons.splice(
          Math.floor(Math.random() * localIcons.length),
          1
        )[0],
      };
    }
  }

  return map;
};

export default getMap;