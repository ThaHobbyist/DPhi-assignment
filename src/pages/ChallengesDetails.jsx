import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rate from "../assets/assets/icons/carbon_skill-level-basic.svg";
import Icon from "@mui/material/Icon";
import moment from "moment";
import Button from "@mui/material/Button";
import Logo from "../assets/assets/icons/Logo.svg";

const Easy = () => {
	return (
		<Icon>
			<img src={Rate} height={20} alt="" />
		</Icon>
	);
};

function ChallengeDetails({ clng }) {
	const location = useLocation();
	const navigate = useNavigate();

	const [data, setData] = useState({});
	const [value, setValue] = useState("Overview");

	useEffect(() => {
		if (location.state !== {}) {
			setData(location.state);
			console.log(data);
		} else if (location.state === {}) navigate("/");
	}, [location.state]);

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
						paddingTop: "126px",
						paddingBottom: "93px",
						pl: "131px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							bgcolor: "#FFCE5C",
							alignItems: "center",
							width: "465px",
							// height: "34px",
							py: "11px",
							px: "22px",
							borderRadius: "5px",
							mb: "24px",
						}}
					>
						<AccessTimeIcon />
						<Typography ml="10px" fontSize="14px" fontWeight="600">
							Starts from{" "}
							{data.start && moment(data.start).format("LLL")}{" "}
							(Indian Standard Time)
						</Typography>
					</Box>
					<Typography
						variant="h2"
						fontSize="40px"
						fontWeight="600"
						color="white"
						mb="33px"
					>
						{data.name}
					</Typography>
					<Typography
						variant="h4"
						fontSize="18px"
						color="white"
						mb="24px"
					>
						{data.tagline}
					</Typography>
					<Box
						sx={{
							width: "102px",
							borderRadius: "5px",
							bgcolor: "#F8F9FD",
							display: "flex",
							alignItems: "center",
							px: "20px",
							py: "10px",
						}}
					>
						<Easy />
						<Typography ml="10px" fontSize="14px" fontWeight="600">
							{data.Difficulty}
						</Typography>
					</Box>
				</Box>
				<Box
					bgcolor="default"
					sx={{
						height: "66px",
						px: "120px",
						py: "0",
						display: "flex",

						justifyContent: "space-between",
					}}
				>
					<Box
						sx={{
							width: "125px",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Typography fontSize="18px" fontWeight="700" mt="30px">
							Overview
						</Typography>
						<Box
							sx={{
								height: "4px",
								width: "100%",
								bgcolor: "#44924C",
								borderRadius: "20px",
								mt: "5px",
							}}
						></Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							my: "auto",
							float: "right",
							width: "202px",
						}}
					>
						<Button
							variant="contained"
							sx={{
								color: "White",
								bgcolor: "#44924C",
								borderRadius: "10px",
							}}
						>
							<Typography fontSize="14px" fontWeight="600">
								Edit
							</Typography>
						</Button>
						<Button
							variant="outlined"
							sx={{
								color: "#DC1414",
								borderColor: "#DC1414",
								borderRadius: "10px",
								ml: "20px",
							}}
						>
							<Typography fontSize="14px" fontWeight="600">
								Delete
							</Typography>
						</Button>
					</Box>
				</Box>
				<Box
					sx={{
						px: "126px",
						py: "40px",
					}}
				>
					{data.Overview &&
						data.Overview.map((txt, index) => {
							return (
								<Typography
									sx={{
										width: "66.4%",
										mb: "20px",
									}}
									variant="body1"
									fontSize="18px"
									color="#64607D"
									key={index}
								>
									{txt}
								</Typography>
							);
						})}
				</Box>
			</Box>
		</>
	);
}

export default ChallengeDetails;
