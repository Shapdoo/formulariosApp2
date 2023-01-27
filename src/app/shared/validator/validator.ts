import { FormControl } from '@angular/forms';

export const nombreApellidoPatter: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSerShapdoo = (argumento: FormControl) => {
  const valor: string = argumento.value?.trim().toLowerCase();

  if (valor === 'shapdoo') {
    return {
      noShapdoo: true,
    };
  }

  return null;
};
