import { FC, useEffect, useState } from "react";
import { Slider, SwitchWrapper, Input } from "./styled";

type Props = {
  checked: boolean;
};

const Switch: FC<Props> = ({ checked = false }) => {
  const [toggle, setToggle] = useState(checked);

  useEffect(() => {
    console.log("first");
  }, [toggle]);
  console.log("toggle", toggle);

  return (
    <SwitchWrapper color="#fff" toggle={toggle}>
      <Input toggle={toggle} type="checkbox" defaultChecked={toggle} />
      <Slider {...{ toggle }} onClick={() => setToggle(!toggle)} />
    </SwitchWrapper>
  );
};

export default Switch;
