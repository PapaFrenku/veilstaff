import { connect } from 'frontity';
import {Element} from 'react-scroll';

const ForWhom = () => {
    return (
        <Element name="forWhom" className="forWhom" key={"display" + "forWhom"}>
            <div className="container">
                <h2 style={{textAlign: "center"}} className="blockTitle">Для кого</h2>
            </div>
        </Element>
    )
};

export default connect(ForWhom)