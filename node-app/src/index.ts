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

// (async () => {
//   const name = await promptInput("名前を入力して下さい");
//   console.log(name);
//   const age = await promptInput("年齢を入力して下さい");
//   console.log(age);
//   process.exit();
// })();

class HitAndBlow {
  private readonly answerSource = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  private answer: string[] = [];
  private tryCount = 0;

  // constructor() {
  //   this.answerSource = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //   this.answer = [];
  //   this.tryCount = 0;
  // }

  setting() {
    const answerLength = 3;

    while (this.answer.length < answerLength) {
      const randNum = Math.floor(Math.random() * this.answerSource.length);
      const selectItem = this.answerSource[randNum];
      if (!this.answer.includes(selectItem)) {
        this.answer.push(selectItem);
      }
    }
  }

  async play() {
    const inputArr = (
      await promptInput(", 区切りで3つの数字を入力して下さい")
    ).split(",");
    const result = this.check(inputArr);

    if (result.hit !== this.answer.length) {
      printLine(`---\nHit: ${result.hit}\nBlow: ${result.blow}\n---`);
      this.tryCount += 1;
      await this.play();
    } else {
      // game end
      this.tryCount += 1;
    }
  }

  private check(input: string[]) {
    let hitCount = 0;
    let blowCount = 0;

    input.forEach((val, index) => {
      if (val === this.answer[index]) {
        hitCount + 1;
      } else if (this.answer.includes(val)) {
        blowCount += 1;
      }
    });

    return {
      hit: hitCount,
      blow: blowCount,
    };
  }
}

(async () => {
  const hitAndBlow = new HitAndBlow();
  hitAndBlow.setting();
  await hitAndBlow.play();
})();
