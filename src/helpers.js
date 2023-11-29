const Choice = (items) => {
  const random = Math.floor(Math.random() * items.length);
  return items[random];
};

const Remove = (items, item) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
};

export { Choice, Remove };
