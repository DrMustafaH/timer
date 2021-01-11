const myArgs = process.argv.slice(2);
const sortedArgs = myArgs.sort((a, b) => (a - b));

for (let i = 0; i < sortedArgs.length; i++) {
  const time = sortedArgs[i];
  let timePerMilliSec = time * 1000;
  if (i < sortedArgs.length && timePerMilliSec >= 0) {
    setTimeout(() => {
      // replaced ('\x07') with ("BEEP") as the former was not working with my laptop i don't know why, turned to search it but no result
      process.stdout.write('BEEP')
      if (i === sortedArgs.length - 1) process.stdout.write('\n')
    }, timePerMilliSec);
  }
};