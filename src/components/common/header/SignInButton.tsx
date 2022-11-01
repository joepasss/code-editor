import { useAuth0 } from "@auth0/auth0-react";
import { Button, styled } from "@mui/material";
import paths from "routes/paths";

const SignInStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();

  const onSignIn = () => {
    loginWithRedirect({ appState: { returnTo: paths.codeEditor } });
  };

  return <SignInStyledButton onClick={onSignIn}>Sign In</SignInStyledButton>;
};

export default SignInButton;
