import { factory } from "./factory";

let count = factory(0, 1);

function update_count_and_reset_counter() { }

const start_at_control = document.getElementById(
  "start_at",
) as HTMLInputElement;

const step_control = document.getElementById("step") as HTMLInputElement;

start_at_control?.addEventListener("change", (e: Event) => {
  const target = e.target as HTMLInputElement;
  start_at_control.value = target.value;
});

step_control?.addEventListener("change", (e: Event) => {
  const target = e.target as HTMLInputElement;

  step_control.value = target.value;
});

const count_button = document.querySelector(
  ".count_button",
) as HTMLButtonElement;

const current_count = document.querySelector(
  ".current_count",
) as HTMLSpanElement;

function update_count() {
const start = parseInt(start_at_control.value , 10) 
let step =  parseInt(step_control.value , 10);
const current_value = parseInt(current_count.innerHTML , 10);
if(current_value == 0) {
  const value = factory(start , step);
  current_count.innerHTML = value().toString();
} else {
  const value = factory(current_value , step);
  current_count.innerHTML = value().toString();
}



}

count_button.addEventListener("click", update_count);
