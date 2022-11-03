import { Button, styled } from "@mui/material";
import { useHistory } from "react-router-dom";
import paths from "routes/paths";

const CodeEditorStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const CodeEditorButton = () => {
  const history = useHistory();

  const onClick = () => {
    history.push(paths.codeEditor);
  };

  return <CodeEditorStyledButton onClick={onClick}>CODE</CodeEditorStyledButton>;
};

export default CodeEditorButton;
