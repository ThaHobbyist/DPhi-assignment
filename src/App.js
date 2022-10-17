import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChallengeForm from "./pages/ChallengeForm";
import Landing from "./pages/Landing";
import ChallengeDetails from "./pages/ChallengesDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: ["Poppins", "sans-serif"].join(","),
	},
	color: {
		palette: {
			primary: "white",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/challengeForm" element={<ChallengeForm />} />
					<Route
						path="/challengeDetails"
						element={<ChallengeDetails />}
					/>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
