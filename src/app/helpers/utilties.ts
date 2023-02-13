export namespace Utils {
  export const randomString = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  export function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

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

  export function randomColor() {
    let color;
    do {
      color = Math.floor(Math.random() * 16777215).toString(16);
    } while (color.length < 6);

    let red = parseInt(color.substring(0, 2), 16);
    let green = parseInt(color.substring(2, 4), 16);
    let blue = parseInt(color.substring(4, 6), 16);
    let brightness = red * 0.299 + green * 0.587 + blue * 0.114;

    if (brightness > 160) {
      return { backgroundColor: '#' + color, color: '#000' };
    } else
      return {
        backgroundColor: '#' + color,
        color: '#fff',
      };
  }

  export const uniqueArray = (array: any[]) => {
    return [...new Set(array)];
  };

  export const isMobile = () => {
    return /Mobi/i.test(window.navigator.userAgent);
  };

  export function delay(timeInMs: number): Promise<void> {
    return new Promise((resolve, _) => {
      setTimeout(() => resolve(), timeInMs);
    });
  }

  export function isPdf(base64: string): boolean {
    const str = base64.split(',')[0];
    return str.indexOf('pdf') >= 0;
  }

  export function paginationNumbers(last: number, current: number): number[] {
    const first = 1; // The first page number
    const displayCount = 5; // The number of page numbers to display
    const halfDisplay = Math.floor(displayCount / 2);

    let start = current - halfDisplay;
    if (start < first) {
      start = first;
    } else if (start + displayCount - 1 > last) {
      start = Math.max(first, last - displayCount + 1);
    }
    const end = Math.min(last, start + displayCount - 1);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  export function filteredParams(...args: any[]): any {
    const obj: any = {};
    args.forEach((arg, index) => {
      if (arg !== undefined) {
        obj[arguments[index].name] = arg;
      }
    });
    return obj;
  }
}
