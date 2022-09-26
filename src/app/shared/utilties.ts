export namespace Utils {
  export const randomString = () => {
    return Math.random().toString(36);
  };

  export const numId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };
}
