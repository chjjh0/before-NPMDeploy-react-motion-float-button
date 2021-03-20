import "./App.css";
import {
  Direction,
  FloatMenuItemButton,
  FloatingGroup,
  Size,
} from "react-button-from-junghun";
import { Twitter } from "@emotion-icons/simple-icons";
import { Facebook, Instagram, Share } from "@emotion-icons/remix-fill";

function App() {
  const handleButton = () => {
    console.log("정훈");
  };

  return (
    <>
      <div className="itemWrapper">
        <FloatingGroup size={Size.REGULAR} direction={"column"}>
          <FloatMenuItemButton
            icon={<Twitter size="50%" />}
            buttonColor="#00ACEE"
          />
          <FloatMenuItemButton
            icon={<Instagram size="50%" />}
            buttonColor="#4f5bd5"
          />
          <FloatMenuItemButton
            icon={<Facebook size="50%" />}
            buttonColor="#3B5998"
          />
          <FloatMenuItemButton
            icon={<Share size="50%" />}
            buttonColor="#16dbc2"
          />
        </FloatingGroup>
      </div>
    </>
  );
}

export default App;
