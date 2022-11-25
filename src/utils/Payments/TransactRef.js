export const randomRef = (id) => {
  const rand = Date.now();
  const ref = rand + id;
  return ref;
};
