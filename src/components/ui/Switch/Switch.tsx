import { FC, useContext, useEffect, useState } from "react";
import { Slider, SwitchWrapper, Input, Label } from "./styled";
import { UserContext } from "../../../context/UsersContext";
import { StyleSheetManager } from "styled-components";

const Switch: FC = () => {
  const checked = false;
  const [toggle, setToggle] = useState(checked);
  const { globalContext, setGlobalContext } = useContext(UserContext);

  useEffect(() => {
    setGlobalContext({ ...globalContext, darkTheme: !toggle });
  }, [toggle]);

  return (
    <StyleSheetManager shouldForwardProp={(prop) => !["toggle"].includes(prop)}>
      <SwitchWrapper color="#fff" toggle={toggle}>
        <Input toggle={toggle} type="checkbox" defaultChecked={toggle} />
        <Slider {...{ toggle }} onClick={() => setToggle(!toggle)} />
        <Label>Mode</Label>
      </SwitchWrapper>
    </StyleSheetManager>
  );
};

export default Switch;
