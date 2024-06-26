import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import "./fundamentals.ts";
import "./union.ts";
import "./arrays.ts";
import "./functions.ts";
import "./sum.ts";
import "./objects.ts";
import "./typeAlias.ts";
import "./intersectionType.ts";
import "./interface.ts";
import "./interfaceExtendMerge.ts";
import "./tuples.ts";
import "./enums.ts";
import "./typeNever.ts";
import "./newStudentFile.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
