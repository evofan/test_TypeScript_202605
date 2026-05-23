// const sayHello = (name:string) => {
//     return `Hello, ${name}`;
// }

// console.log(sayHello("Michael Jackson"));
// process.stdout.write(sayHello("Michael Jackson"));

const printLine = (text: string, breakline: boolean = true) => {
  console.log(text + (breakline ? "\n" : ""));
};

const promptInput = async (text: string) => {
  printLine(`\n${text}\n> `, false);
  const input: string = await new Promise((resolve) =>
    process.stdin.once("data", (data) => resolve(data.toString())),
  );
  return input.trim();
};

(async () => {
  const name = await promptInput("名前を入力して下さい");
  console.log(name);
  const age = await promptInput("年齢を入力して下さい");
  console.log(age);
  process.exit();
})();
