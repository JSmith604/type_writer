const sentence = "hello there from lighthouse labs";



const typeWriter = (sentence) =>  {
  let timeDelay = 0;
  for (let char of sentence) {
    setTimeout(() => 
    process.stdout.write(char),timeDelay);
    timeDelay += 50;
  }
  setTimeout(() => 
  process.stdout.write("\n"), timeDelay);
}


typeWriter(sentence);
