import './Left.css';
import Card from '../Card/Card';

const Left = (props) => {
    let excercises = props.excercises;
    let gymHandler = props.gymHandler;

    return (
        <div className='left'>
            <div className='left-cards'>
                {
                    excercises.map(e => <Card
                        key={e.name}
                        e={e}
                        gymHandler={gymHandler}
                    ></Card>)
                }
            </div>
            <div className='left-q'>
                <h2>Question 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, quis?</h2>
                <p>Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maiores temporibus illum exercitationem beatae, vero dolore architecto doloremque optio molestias. Esse placeat, saepe iusto sapiente aliquam alias impedit. Deserunt consequatur officia sunt animi qui necessitatibus iusto culpa quaerat eligendi, libero, expedita adipisci veritatis sint nulla non molestiae itaque aut assumenda.</p>
                <h2>Question 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, quis?</h2>
                <p>Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maiores temporibus illum exercitationem beatae, vero dolore architecto doloremque optio molestias. Esse placeat, saepe iusto sapiente aliquam alias impedit. Deserunt consequatur officia sunt animi qui necessitatibus iusto culpa quaerat eligendi, libero, expedita adipisci veritatis sint nulla non molestiae itaque aut assumenda.</p>
                <h2>Question 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, quis?</h2>
                <p>Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maiores temporibus illum exercitationem beatae, vero dolore architecto doloremque optio molestias. Esse placeat, saepe iusto sapiente aliquam alias impedit. Deserunt consequatur officia sunt animi qui necessitatibus iusto culpa quaerat eligendi, libero, expedita adipisci veritatis sint nulla non molestiae itaque aut assumenda.</p>
            </div>
        </div>
    );
};

export default Left;