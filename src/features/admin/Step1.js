import StepNavbar from "./stepNavbar";
import Uploader from "./Uploader";

function Step1() {

    return (
        <div className="step-1-container">
            <h1 className="step-title">Ariza topshirish</h1>
            <StepNavbar />

            <div className="step-1-content">
                <h1 className="step-1-content-title">Umumiy ma’lumotlar</h1>
                <Uploader/>
            </div>
        </div>
    );
}

export default Step1;