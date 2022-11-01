import Layout from "layout/Layout";
import ProgrammingLanguageList from "components/home/programming-languages-list/ProgrammingLanguagesList";
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
				<WelcomeMessage>Welcome to the Code Editor App</WelcomeMessage>
				<ProgrammingLanguageList />
			</HomeContainer>
		</Layout>
	);
};

export default Home;
