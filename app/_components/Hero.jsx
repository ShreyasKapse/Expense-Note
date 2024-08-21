import React from "react";

function Hero() {
  return (
    <section class="bg-gray-50">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
        <div class="mx-auto max-w-xl text-center">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Manage Your Expenses.
            <strong class="font-extrabold text-primary sm:block">
              {" "}
              Control Your Money.{" "}
            </strong>
          </h1>

          <p class="mt-4 sm:text-xl/relaxed">
            start manage your finance using our tool.
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
