import { Layout } from "layout/Layout";
import { styled } from "@mui/material";

const HomeContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	height: "100%",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: theme.background,
}));

const WelcomeMessage = styled("div")(({ theme }) => ({
	padding: "15px",
	fontSize: "30px",
	color: theme.font,
}));

const Home = () => {
	return (
		<Layout>
			<HomeContainer>
				<WelcomeMessage>Welcome to the Code editor app!</WelcomeMessage>
			</HomeContainer>
		</Layout>
	);
};

export default Home;