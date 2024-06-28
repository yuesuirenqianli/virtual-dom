import { init, h, eventListenersModule } from "snabbdom";

const patch = init([eventListenersModule]);

const app = document.getElementById("app");

let vnode = start();
patch(app, vnode);

function start() {
  return h("div#container", [
    h("h1", "Virtual DOM"),
    h("p", "This is a simple snabbdom example."),
    h("button", { on: { click: () => toggler(update()) } }, "update"),
  ]);
}

function update() {
  return h("div#container", [
    h("h1", "Virtual DOM"),
    h("p", "update success"),
    h("button", { on: { click: () => toggler(start()) } }, "reset"),
  ]);
}

function toggler(newNode) {
  patch(vnode, newNode);
  vnode = newNode;
}
