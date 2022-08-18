import "./app1.css";
import Vue from "vue";

const init = (el) => {
  const m = {
    get() {
      return parseFloat(localStorage.getItem("n"));
    },
    set(n) {
      localStorage.setItem("n", n);
    },
  };
  Vue.createApp({
    data() {
      return { n: m.get() };
    },
    methods() {
      return {
        add() {
          this.n += 1;
        },
        minus() {
          this.n -= 1;
        },
        mul() {
          this.n *= 2;
        },
        div() {
          this.n /= 2;
        },
      };
    },
    watch() {
      return {
        n: function () {
          m.set(this.n);
        },
      };
    },
    template() {
      return `
      <section>
        <div class="output">
          <span id="number">{{n}}</span>
        </div>
        <div class="actions">
          <button @click="add">+1</button>
          <button @click="minus">-1</button>
          <button @click="mul">*2</button>
          <button @click="div">÷2</button>
        </div>
      </section>
    `;
    },
  }).mount(el);
};

export default init;
