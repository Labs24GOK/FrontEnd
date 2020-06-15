import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory, Switch, Route } from 'react-router-dom';
import StartTest from './StartTest';
import ChildQuestions from './ChildQuestions'

const ChildPlacementTest = props => {
  const { push } = useHistory()
  const [page, setPage] = useState(0)
  const [questions, setQuestions] = useState([])

  const fetchTest = () => {
    return [
      {
        key: 1,
        id: 1,
        question: "Five",
        choices: ["a", "b", "c"],
        images: ['../../../../../assets/Logo.png', '../../../../../assets/Logo.png', '../../../../../assets/Logo.png']
      },
      {
        key: 2,
        id: 2,
        question: "Pencil",
        choices: ["a", "b", "c"],
        images: ['../../../../../assets/Logo.png', '../../../../../assets/Logo.png', '../../../../../assets/Logo.png']
      },
    ];
  };

  useEffect(() => {
    setQuestions(fetchTest)
    if (questions) setPage(1)
  }, [])

  const currentQuestion = (num) => {
    return questions.filter(question => question.key === num)
  }

  const nextQuestion = () => {
    setPage(page + 1)
  }


  const testHelper = () => {
    if(page === 1) {
      return <StartTest />
    }  else if (page >= 2) {
      return <ChildQuestions questions={questions} page={page} nextQuestion={nextQuestion} />
    }
  }

  return (
    <div>
      { questions ? testHelper() : (<h1>LOADING...</h1>) }
      <Button onClick={() => setPage( page + 1 )}>Next</Button>
      <Button onClick={() => console.log(page, questions)}>LOG</Button>
    </div>
  );
};

export default ChildPlacementTest;

// 1. Five
// B.
// C.
// A.
// 2. Pencil
// B.
// A.
// C.
// 3. Ball
// A.
// B.
// C.
// 4. A big dog
// A.
// B.
// C.
// 5. Eyes
// A
// B
// C
// 6. I've got a long tail
// A.
// B.
// C.
// 7. Socks
// A.
// B.
// C.
// 8. I can't ride a bike
// A
// B
// C
// 9. Bedroom
// A
// B
// C
// 10. I like ice cream
// A
// B
// C
// 11. eighteen
// A
// B
// C
// 12. These are kites
// A
// B
// C
// 13. Lamp
// A
// B
// C
// 14. They're eating cake
// A
// B
// C
// 15. Juice
// A
// B
// C
// 16. It can swim and jump
// A
// B
// C
// 17. Basketball
// A
// B
// C
// 18. The carrots are between the tomatoes and plums
// A.
// B
// C
// 19. Grandparents
// A
// B
// C
// 20. She's getting dressed
// A
// B
// C
// 21. fifty
// A
// B
// C
// 22. He works on a farm
// A
// B
// C
// 23. Backache
// A
// B
// C
// 24. He's very strong
// A
// B
// C
// 25. Snow
// A
// B
// C
// Congratulations! - تهانينا
// Well done on finishing part 1 - أحسنت في الانتهاء من الجزء الأول

// Was part 1 challenging? - هل كان الجزء الأول تحديًا؟
// Yes
// No
// Part 2
// Read the sentences and choose the correct one.

// 26.
// She's exciting.
// She's difficult.
// She's busy.
// 27.
// He's running quickly.
// He's running good.
// He's running quick.
// 28.
// He go to the doctor yesterday.
// He goed to the doctor yesterday.
// He went to the doctor yesterday.
// 29. 12th
// Twelve.
// Twelfth.
// Twelveth.
// 30.
// I could read when I was six.
// I couldn't read when I am six.
// I can read when I was six.
// 31.
// The horse is thirsty than the dog.
// The horse is thirster than the dog.
// The horse is thirstier than the dog.
// 32.
// Giraffes are the taller animals in the world.
// Giraffes are the tallest animals in the world.
// Giraffes are the tallest than animals in the world.
// 33.
// He didn't ate sandwiches for lunch.
// He not eat sandwiches for lunch.
// He didn't eat sandwiches for lunch.
// 34.
// The man walked the library.
// The man walked into the library.
// The man walked on the library.
// 35.
// It's half past two.
// It's quarter past two.
// It's quarter to two.
// 36.
// They're going to catch the bus.
// They going to catch the bus.
// They go to catch the bus.
// 37.
// This is the room which you brush your teeth.
// This is the room where you brush your teeth.
// This is the room who you brush your teeth.
// 38.
// He was eat dinner at 8 o' clock.
// He was ate dinner at 8 o' clock.
// He was eating dinner at 8 o' clock.
// 39.
// The first month of the year is January.
// The first month of the year is July.
// The first mont of the year is June.
// 40.
// Is paper made to wood?
// Is paper made of wood?
// Is paper made in wood?
// 41.
// The tea looks like hot.
// The tea look hot.
// The tea looks hot.
// 42.
// You shouldn't to carry heavy bags.
// You shouldn't carried heavy bags.
// You shouldn't carry heavy bags.
// 43.
// She win the match.
// She's won the match.
// She's winned the match.
// 44.
// Will the rocket go to the moon.
// Will the rocket goes to the moon.
// Will the rocket going to the moon.
// 45.
// They were walked in the forest when they seeing an owl.
// They’re walking in the forest when they’re seeing an owl.
// They were walking in the forest when they saw an owl.
// 46.
// There are enough foods to eat.
// There is enough food to eat.
// There are enough food to eat.
// 47.
// The door bell rang but no-one was at the door.
// The door bell rang but anyone was at the door.
// The door bell rang but everyone was at the door.
// 48.
// They might need their coats.
// They might to need their coats.
// They may to need their coats.
// 49.
// He's excited.
// He's afraid.
// He's brave.
// 50.
// I’m never eating Italian food before.
// I never eat Italian food before.
// I’ve never eaten Italian food before.