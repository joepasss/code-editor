import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import paths from "routes/paths";
import CodeEditorButton from "./CodeEditorButton";
import DarkModeSwitch from "./DarkModeSwitch";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.commonColors.white,
}));

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          <StyledLink to={paths.home}>Code Editor App</StyledLink>
        </Typography>

        <DarkModeSwitch />

        {isAuthenticated ? <AuthenticatedButtons /> : <UnathenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
};

const UnathenticatedButtons = () => {
  return (
    <div>
      <SignInButton />
    </div>
  );
};

const AuthenticatedButtons = () => {
  return (
    <div>
      <CodeEditorButton />
      <SignOutButton />
    </div>
  );
};

export default Header;
