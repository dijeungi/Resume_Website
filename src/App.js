import "./App.css";
import Comment from "./components/comment";

import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function App() {
    return (
        // Container
        <>
            <div className="App_Header">
                <div className="Header_Left">
                    최준호
                    <div className="Left_Sub">프론트엔드 개발자</div>
                </div>
                <div className="Header_Right">
                    <div className="Right_Phone">연락처: 010-5357-7933</div>
                    <div className="Right_Email">이메일: junho_0211@naver.com</div>
                    <GitHubIcon />
                    <PhoneIphoneIcon />
                    <AlternateEmailIcon />
                </div>
            </div>

            {/* Container */}
            <div className="App_Content">
                <div className="Content_Title">Introduce</div>

                <div className="Content_Photo">
                    <img src="" />
                </div>
                <div className="Content_Text"></div>
            </div>

            <Comment />
        </>
    );
}

export default App;
