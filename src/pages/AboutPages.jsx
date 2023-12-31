import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
    return (
        <div className="container">
            <Card>
                <div className="about">
                    <h1>About this project</h1>
                    <p>This is a react app to leave a feedback for a product or service</p>
                    <p>Version: 1.0.0</p>

                    <p>
                        <Link to='/'>Back to 🏡</Link>
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default AboutPage