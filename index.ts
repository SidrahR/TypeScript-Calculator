#!/usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation, { rainbow } from "chalk-animation";
import { createSpinner } from "nanospinner";

const timer = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function title() {
  const rainbowTitle = chalkAnimation.rainbow(`
\t ============================
\t TYPESCRIPT CLI CALCULATOR 🔢
\t ============================\n`);
  await timer(2000);
  rainbowTitle.stop();
  console.log("Use Arrow Keys ⬆⬇ or Numbers (1-5) to Select Operator");
}

async function calculator() {
  do {
    console.log();
    let answers = await inquirer
      .prompt([
        {
          name: "operator",
          type: "list",
          message: "Which calculation do you want to perform?",
          choices: [
            " + Addition",
            " - Subtraction",
            " x Multiplication",
            " ÷ Division",
            " % Modulus",
          ],
        },
        {
          name: "number1",
          type: "number",
          default: 0,
          message: "Enter first number",
        },
        {
          name: "number2",
          type: "number",
          default: 0,
          message: "Enter second number",
        },
      ])
      .then(async (answers) => {
        switch (answers.operator) {
          case " + Addition":
            var spinner = createSpinner("Calculating result ... ").start();
            await timer(1500);
            spinner.success({
              text: `${answers.number1} + ${answers.number2} = ${
                answers.number1 + answers.number2
              }\n`,
            });
            break;

          case " - Subtraction":
            spinner = createSpinner("Calculating result ... ").start();
            await timer(1500);
            spinner.success({
              text: `${answers.number1} - ${answers.number2} = ${
                answers.number1 - answers.number2
              }\n`,
            });
            break;

          case " x Multiplication":
            spinner = createSpinner("Calculating result ... ").start();
            await timer(1500);
            spinner.success({
              text: `${answers.number1} x ${answers.number2} = ${
                answers.number1 * answers.number2
              }\n`,
            });
            break;

          case " ÷ Division":
            spinner = createSpinner("Calculating result ... ").start();
            await timer(1500);
            spinner.success({
              text: `${answers.number1} ÷ ${answers.number2} = ${
                answers.number1 / answers.number2
              }\n`,
            });
            break;

          case " % Modulus":
            spinner = createSpinner("Calculating result ... ").start();
            await timer(1500);
            spinner.success({
              text: `${answers.number1} % ${answers.number2} = ${
                answers.number1 % answers.number2
              }\n`,
            });
            break;
        }
      });

    var cont = await inquirer.prompt([
      {
        name: "continue",
        message: "Do you want to perform another calculation? (Y/N)",
      },
    ]);
  } while (
    cont.continue == "Y" ||
    cont.continue == "y" ||
    cont.continue == "yes" ||
    cont.continue == "Yes"
  );
}

console.clear();
await title();
await calculator();
