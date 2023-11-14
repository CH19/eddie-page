import './style.scss'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts';
import { change } from './menu.ts'; 
import AOS from 'aos';
import "../node_modules/aos/dist/aos.css";
AOS.init();
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
`
document.querySelector<HTMLElement>('.mobile-menu')?.addEventListener('click', change);
document.querySelector<HTMLElement>('.delete')?.addEventListener('click', change);
const button = document.querySelector<HTMLButtonElement>('#SayThing');
  button?.addEventListener('click', ()=>{
    button.innerText = 'Que mas bro';
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <h1> Vaya lio pero si has cambiao </h1>
    `
  });
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
