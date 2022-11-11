import { Fragment } from "react";
import DarkModeIcon from "@mui/icons-material/Brightness2";
import { Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { toggleDarkMode } from "store/slices/dark-mode/darkMode";

const DarkModeSwitch = () => {
  const darkMode = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Fragment>
      <DarkModeIcon />
      <Switch color="default" checked={darkMode} onChange={onChangeDarkMode} />
    </Fragment>
  );
};

export default DarkModeSwitch;
