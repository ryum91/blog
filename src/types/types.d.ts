declare module 'emergence.js' {
  interface Emergence {
    init: () => void;
  }

  const emergence: Emergence;
  export default emergence;
}
