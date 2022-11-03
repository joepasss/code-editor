import { styled } from "@mui/material";
import Header from "components/common/header/Header";
import { PropsWithChildren } from "react";

const LayoutContainer = styled("div")({
	height: "100%",
	display: "flex",
	flexDirection: "column",
});

const Page = styled("div")({
	height: "100%",
});

export const Layout = (props: PropsWithChildren<{}>) => {
	return (
		<LayoutContainer>
			<Header />
			<Page>{props.children}</Page>
		</LayoutContainer>
	);
};
