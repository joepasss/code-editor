import { useAuth0 } from "@auth0/auth0-react";
import { Button, styled } from "@mui/material";

const SignOutStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const SignOutButton = () => {
  const { logout } = useAuth0();

  const onSignOut = () => {
    logout({ returnTo: window.location.origin });
  };

  return <SignOutStyledButton onClick={onSignOut}>Sign Out</SignOutStyledButton>;
};

export default SignOutButton;
