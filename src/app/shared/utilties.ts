export namespace Utils {
  export const randomString = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  export const numId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  export function csvToArray(str: string, delimiter = ',') {
    const headers = str.slice(0, str.indexOf('\n')).split(delimiter);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object: any, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
    return arr;
  }

  export const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };
}
