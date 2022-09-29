import './Left.css';
import Card from '../Card/Card';

const Left = (props) => {
    let excercises = props.excercises;
    let gymHandler = props.gymHandler;

    return (
        <div className='left'>
            <div style={{margin: "25px"}}>
                <h2>Gym Activity</h2>
                <p>Select Gym</p>
            </div>
            <div className='cards'>
                {
                    excercises.map(e => <Card
                        key={e.name}
                        e={e}
                        gymHandler={gymHandler}
                    ></Card>)
                }
            </div>
            <div style={{
                margin: "25px"
            }}>
                <h2>Question 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, neque!</h2>
                <p>Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae nostrum molestiae nihil, eligendi dolorem iure deleniti est voluptatum repellat alias repudiandae ipsam animi laborum quos et earum ad, aperiam sint beatae? Architecto cum, quas nihil quisquam porro eos consequuntur, sint sed, delectus dicta est officia. Sapiente soluta consequuntur praesentium?</p>

                <h2>Question 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, neque!</h2>
                <p>Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae nostrum molestiae nihil, eligendi dolorem iure deleniti est voluptatum repellat alias repudiandae ipsam animi laborum quos et earum ad, aperiam sint beatae? Architecto cum, quas nihil quisquam porro eos consequuntur, sint sed, delectus dicta est officia. Sapiente soluta consequuntur praesentium?</p>

                <h2>Question 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, neque!</h2>
                <p>Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae nostrum molestiae nihil, eligendi dolorem iure deleniti est voluptatum repellat alias repudiandae ipsam animi laborum quos et earum ad, aperiam sint beatae? Architecto cum, quas nihil quisquam porro eos consequuntur, sint sed, delectus dicta est officia. Sapiente soluta consequuntur praesentium?</p>
            </div>
        </div>
    );
};

export default Left;