import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import paths from "src/routes/paths";

const CodeEditorStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const SignOutButton = () => {
  const history = useHistory();

  const onClick = () => {
    history.push(paths.codeEditor);
  };

  return <CodeEditorStyledButton onClick={onClick}>Code Editor</CodeEditorStyledButton>;
};

export default SignOutButton;