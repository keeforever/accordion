import {useState} from 'react';
import questionsData from './data'
import Questions from './components/Questions';

function App() {

  const [questions, setQuestions] = useState(questionsData);

  return (
    <main>
      <section className="container">
        <aside className="accordion-aside">
          <h1>Questions And Answers About Login.</h1>
        </aside>
        {/* question and answer */}
        <section className='qa-container'>
          {questions.map((question)=>{
            const {title,info,id}=question
            return <Questions key ={id} title={title} info={info} />
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
