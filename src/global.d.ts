
declare module '@primer/primitives/dist/figma/themes/*.json' {
  type Token = {
    name: string
  } & (
      | { type: 'COLOR'; value: { r: number; g: number; b: number; a: number } }
      | { type: 'FLOAT'; value: number }
    );

  type Theme = Token[];

  const theme: Theme;

  export default theme;
}
