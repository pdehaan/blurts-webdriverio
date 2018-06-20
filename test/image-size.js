const glob = require("glob");
const sizeOf = require("image-size");

glob("./test/shots/*.png", (err, images) => {
  if (err) {
    throw err;
  }
  console.log("IMAGE | WIDTH | HEIGHT | SRC\n------|:-----:|:------:|-----");
  images
    .map(img => {
      const { width, height } = sizeOf(img);
      return { img, width, height };
    })
    // .filter(item => item.width > 386)
    .sort((a, b) => Number(a.width) - Number(b.width))
    .forEach(({img, width, height}) => console.log(`${img} | ${width} | ${height} | ![](${img})`));
});
