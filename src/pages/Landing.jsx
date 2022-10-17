import React from "react";
import {useNavigate} from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Challenges from "../components/Challenges";

import AI from "../assets/assets/icons/Group 1000002515.svg";
import Bin from "../assets/assets/icons/Group 1000002516.svg";
import Rob from "../assets/assets/icons/Group 1000002518.svg";
import Rocket from "../assets/assets/icons/PicsArt_04-14-04.42 1.svg";
import Notebook from "../assets/assets/icons/carbon_notebook-reference.svg";
import Robot from "../assets/assets/icons/Robot.svg";
import Public from "../assets/assets/icons/Vector.svg";
import Id from "../assets/assets/icons/IdentificationCard.svg";
import Logo from "../assets/assets/icons/Logo.svg";

function Landing() {
	const navigate = useNavigate();
	return (
		<>
			<Box sx={{ flexGrow: 1 }} overflow-y="scroll">
				<AppBar position="static" color="default">
					<Box
						component="img"
						src={Logo}
						sx={{
							width: "87px",
							my: "16px",
							ml: "89px",
						}}
					></Box>
				</AppBar>
				<Box
					bgcolor="#003145"
					sx={{
						display: "flex",
						paddingTop: "126px",
						paddingBottom: "93px",
					}}
				>
					<Box
						style={{
							width: 10,
							backgroundColor: "#FFCE5C",
							height: 115,
							marginLeft: "10%",
							marginRight: "3.6%",
						}}
					></Box>
					<Box
						sx={{
							width: "44.6%",
						}}
					>
						<Typography
							variant="h3"
							color="white"
							fontWeight={600}
							fontSize="48px"
						>
							Accelerate Innovation With Global AI Challenges
						</Typography>
						<Typography
							variant="body1"
							color="white"
							fontWeight={500}
							fontSize="18px"
							width="531px"
							mt="38px"
							mb="37px"
						>
							AI Challenges at DPhi simulate real-world problems.
							It is a great place to put your AI/Data Science
							skills to test on diverse datasets allowing you to
							foster learning through competitions.
						</Typography>
						<Button variant="contained" color="inherit" p="14px" onClick={() => {navigate("/challengeForm")}}>
							Create Challenge
						</Button>
					</Box>
					<Box
						component="img"
						sx={{
							width: "300px",
							marginLeft: "95px",
						}}
						src={Rocket}
					></Box>
				</Box>
				<Box
					bgcolor="#002A3B"
					sx={{
						color: "white",
						paddingX: "184px",
						paddingY: "72px",
					}}
				>
					<Grid
						container
						spacing={4}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Grid
							container
							item
							xs
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								fontFamily: "Inter",
								width: "425px",
								paddingX: "20px",
							}}
						>
							<Box component="img" width="55px" src={AI} />
							<Box px={2}>
								<Typography
									variant="h4"
									fontSize="24px"
									fontWeight="700"
								>
									100K+
								</Typography>
								<Typography
									variant="h6"
									fontSize="16px"
									fontWeight="500"
								>
									AI Model Submissions
								</Typography>
							</Box>
						</Grid>
						<Box
							sx={{
								height: "38px",
								width: "1px",
								backgroundColor: "white",
								marginTop: "32px",
							}}
						></Box>
						<Grid
							container
							item
							xs
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								fontFamily: "Inter",
								width: "425px",
								paddingX: "20px",
							}}
						>
							<Box component="img" width="55px" src={Bin} />
							<Box px={2}>
								<Typography
									variant="h4"
									fontSize="24px"
									fontWeight="700"
								>
									50K+
								</Typography>
								<Typography
									variant="h6"
									fontSize="16px"
									fontWeight="500"
								>
									Data Scientists
								</Typography>
							</Box>
						</Grid>
						<Box
							sx={{
								height: "38px",
								width: "1px",
								backgroundColor: "white",
								marginTop: "32px",
							}}
						></Box>
						<Grid
							container
							item
							xs
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								fontFamily: "Inter",
								width: "425px",
								paddingX: "20px",
							}}
						>
							<Box component="img" width="55px" src={Rob} />
							<Box px={2}>
								<Typography
									variant="h4"
									fontSize="24px"
									fontWeight="700"
								>
									100+
								</Typography>
								<Typography
									variant="h6"
									fontSize="16px"
									fontWeight="500"
								>
									Challenges Hosted
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						height: "902px",
						paddingX: "160px",
						paddingTop: "72px",
					}}
				>
					<Typography
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginBottom: "72px",
						}}
						color="black"
						variant="h4"
						fontSize="32px"
						fontWeight="600"
					>
						Why Participate in &nbsp;
						<Typography variant="inherit" color="#44924C">
							AI Challenges?
						</Typography>
					</Typography>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Grid
							container
							mx="auto"
							columnSpacing={0}
							rowSpacing={2}
						>
							<Grid item xs={12} md={6} p="20px">
								<Card
									elevation={0}
									sx={{
										backgroundColor: "#F8F9FD",
										marginX: "auto",
										borderRadius: "20px",
										padding: "10px",
										width: "542px",
										height: "276px",
										display: "flex",
										flexDirection: "column",
										alignContent: "center",
										justifyContent: "flex-start",
									}}
								>
									<CardContent
										sx={{
											marginY: "auto",
											paddingRight: "40px",
											paddingLeft: "30px",
										}}
									>
										<Box
											component="img"
											sx={{
												width: "38px",
											}}
											src={Notebook}
										></Box>
										<Typography
											variant="h5"
											fontSize="24px"
											fontWeight="600"
											my={2}
										>
											Prove your Skills
										</Typography>
										<Typography
											variant="body1"
											fontSize="16px"
										>
											Gain substantial experience by
											solving real-world problems and pit
											against others to come up with
											innovative solutions.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={6} p="20px">
								<Card
									elevation={0}
									sx={{
										backgroundColor: "#F8F9FD",
										marginX: "auto",
										borderRadius: "20px",
										padding: "10px",
										width: "542px",
										height: "276px",
										display: "flex",
										flexDirection: "column",
										alignContent: "center",
										justifyContent: "flex-start",
									}}
								>
									<CardContent
										sx={{
											marginY: "auto",
											paddingRight: "40px",
											paddingLeft: "30px",
										}}
									>
										<Box
											component="img"
											sx={{
												width: "38px",
											}}
											src={Public}
										></Box>
										<Typography
											variant="h5"
											fontSize="24px"
											fontWeight="600"
											my={2}
										>
											Learn From Community
										</Typography>
										<Typography
											variant="body1"
											fontSize="16px"
										>
											One can look and analyze the
											solutions submitted by the other
											Data Scientists in the community and
											learn from them.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={6} p="20px">
								<Card
									elevation={0}
									sx={{
										backgroundColor: "#F8F9FD",
										marginX: "auto",
										borderRadius: "20px",
										padding: "10px",
										width: "542px",
										height: "276px",
										display: "flex",
										flexDirection: "column",
										alignContent: "center",
										justifyContent: "flex-start",
									}}
								>
									<CardContent
										sx={{
											marginY: "auto",
											paddingRight: "40px",
											paddingLeft: "30px",
										}}
									>
										<Box
											component="img"
											sx={{
												width: "38px",
											}}
											src={Robot}
										></Box>
										<Typography
											variant="h5"
											fontSize="24px"
											fontWeight="600"
											my={2}
										>
											Challenge Yourself
										</Typography>
										<Typography
											variant="body1"
											fontSize="16px"
										>
											There is nothing for you to lose by
											participating in a challenge. You
											can fail safe, learn out of the
											entire experience and bounce back
											harder.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={6} p="20px">
								<Card
									elevation={0}
									sx={{
										backgroundColor: "#F8F9FD",
										marginX: "auto",
										borderRadius: "20px",
										padding: "10px",
										width: "542px",
										height: "276px",
										display: "flex",
										flexDirection: "column",
										alignContent: "center",
										justifyContent: "flex-start",
									}}
								>
									<CardContent
										sx={{
											marginY: "auto",
											paddingRight: "40px",
											paddingLeft: "30px",
										}}
									>
										<Box
											component="img"
											sx={{
												width: "38px",
											}}
											src={Id}
										></Box>
										<Typography
											variant="h5"
											fontSize="24px"
											fontWeight="600"
											my={2}
										>
											Earn Recognition
										</Typography>
										<Typography
											variant="body1"
											fontSize="16px"
										>
											You will stand out from the crowd if
											you do well in AI challenges, it not
											only helps you shine in the
											community but also earns rewards.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Challenges />
			</Box>
		</>
	);
}

export default Landing;
