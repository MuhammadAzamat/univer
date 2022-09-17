import StepNavbar from "./stepNavbar";
import Uploader from "./Uploader";

function Step1() {

    return (
        <div className="step-1-container">
            <h1 className="step-title">Ariza topshirish</h1>
            <StepNavbar />

            <div className="step-1-content">
                <h1 className="step-1-content-title">Umumiy ma’lumotlar</h1>
                <div className="step-1-image-upload">
                    <Uploader />
                    <div className="step-1-image-upload-right">
                        <h2>Fotasurat ni yuklang</h2>
                        <h3>You can upload  .JPEG, .JPG, or .PNG photes not over 1 MB.</h3>
                        <a className="btn-upload"> <img src={require("../../assets/img/icon-left.png")} /> Upload photo</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Step1;