import * as dat from 'dat.gui';

export function removeDatGui() {
  const existingGui = document.querySelector('.dg.main');
  if (existingGui) existingGui.remove();
}

export class ReactDatGui extends dat.GUI {
  constructor() {
    // Deals with duplicate created due to safe mode in development
    removeDatGui();
    super();
  }
}


// TODO: Properly doing this would be a lot of work for the slight reward of mildly cleaner code - do I really care?
// interface AllieDatGuiSettings {
//   default: number | boolean
//   step?: number
// }
// export class AllieDatGui extends dat.GUI {
//   constructor(settings: Record<string, AllieDatGuiSettings>) {
//     removeDatGui();
//     super();
//     Object.entries(settings).forEach(([key, setting]) => {
//       this.add
//     })
//   }
// }
