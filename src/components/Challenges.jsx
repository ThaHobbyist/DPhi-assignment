import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { KeyboardArrowDown } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Timer from "./Timer";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Chip from "@mui/material/Chip";

import SearchIcon from "@mui/icons-material/Search";
// import Toolbar from "@mui/material/Toolbar";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Img1 from "../assets/assets/cardimage/Img1.png";
import Img2 from "../assets/assets/cardimage/Img2.png";
import Img3 from "../assets/assets/cardimage/Img3.png";
import Img4 from "../assets/assets/cardimage/Img4.png";
import Img5 from "../assets/assets/cardimage/Img5.png";
import Img6 from "../assets/assets/cardimage/Img6.png";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";

import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
	noBorder: {
		border: "none",
	},
}));

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color:
			theme.palette.mode === "light"
				? "rgb(55, 65, 81)"
				: theme.palette.grey[300],
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: "4px 0",
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			"&:active": {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity
				),
			},
		},
	},
}));

function Challenges() {
	const navigate = useNavigate();
	const classes = useStyles([]);
	const [challenges, setChallenges] = useState([]);

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	const dummy = [
		{
			name: "Data Science BootCamp-Graded Datathon",
			img: Img4,
			start: 1665917909,
			end: 1665827809,
		},
		{
			name: "Data Sprint 72 - Butterfly Identification",
			img: Img2,
			tagline: "Identify the class to which each butterfly belongs to",
			Overview: [
				`Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.`,

				`An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.`,

				`Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.`,
			],
			Difficulty: "Easy",
			start: 1671172200,
			end: 1671182200,
		},
		{
			name: "Data Sprint 71 - Weather Recognition",
			img: Img3,
			start: 1665917909,
			end: 1665927909,
		},
		{
			name: "Data Sprint 70-Airline Passenger Satisfaction",
			img: Img5,
			start: 1665917909,
			end: 1665927909,
		},
		{
			name: "Engineering Graduates Employment Outcomes",
			img: Img6,
			start: 1665917909,
			end: 1665927909,
		},
		{
			name: "Travel Insurance Claim Prediction",
			img: Img1,
			start: 1665917909,
			end: 1665927909,
		},
	];

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [filter, setFilter] = useState([]);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setFilter(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	const [searchInput, setSearchInput] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	const status = (start, end) => {
		if (Date.now() < start) {
			return (
				<Box
					sx={{
						width: "87px",
						height: "21px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						bgcolor: "#F2C94C40",
						borderRadius: "5px",
						my: "20px",
					}}
				>
					<Typography
						variant="body2"
						fontSize="12px"
						fontWeight="600"
						color="#666666"
					>
						Upcoming
					</Typography>
				</Box>
			);
		} else if (Date.now() < end) {
			return (
				<Box
					sx={{
						width: "87px",
						height: "21px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						bgcolor: "#44924C3D",
						borderRadius: "5px",
						my: "20px",
					}}
				>
					<Typography
						variant="body2"
						fontSize="12px"
						fontWeight="600"
						color="#44924C"
					>
						Active
					</Typography>
				</Box>
			);
		} else
			return (
				<Box
					sx={{
						width: "87px",
						height: "21px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						bgcolor: "#FF3C002B",
						borderRadius: "5px",
						my: "20px",
					}}
				>
					<Typography
						variant="body2"
						fontSize="12px"
						fontWeight="600"
						color="#666666"
					>
						Past
					</Typography>
				</Box>
			);
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "Column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#002A3B",
					padding: "72px",
				}}
			>
				<Typography
					variant="h4"
					fontSize="28px"
					fontWeight="600"
					color="white"
					mb="64px"
				>
					Explore Challenges
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Box
						className="input"
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: "829px",
							bgcolor: "white",
							borderRadius: "12px",
							height: "50px",
						}}
					>
						<TextField
							fullWidth
							value={searchInput}
							onChange={handleSearch}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon sx={{ mr: 1 }} />
									</InputAdornment>
								),
								classes: {
									notchedOutline: classes.noBorder,
								},
								borderradius: "12px",
								color: "primary",
							}}
						></TextField>
					</Box>
					<FormControl sx={{ m: 1, width: 300 }}>
						<InputLabel id="demo-multiple-chip-label">
							Chip
						</InputLabel>
						<Select
							labelId="demo-multiple-chip-label"
							id="demo-multiple-chip"
							multiple
							value={filter}
							onChange={handleChange}
							input={
								<FilledInput
									id="select-multiple-chip"
									label="Chip"
								/>
							}
							renderValue={(selected) => (
								<Box
									sx={{
										display: "flex",
										flexWrap: "wrap",
										gap: 0.5,
									}}
								>
									{selected.map((value) => (
										<Chip key={value} label={value} />
									))}
								</Box>
							)}
							MenuProps={MenuProps}
						>
							<ListSubheader label="Activity"></ListSubheader>
							<MenuItem value="All">All</MenuItem>
							<MenuItem value="Active">Active</MenuItem>
							<MenuItem value="Upcoming">Upcoming</MenuItem>
							<MenuItem value="Past">Past</MenuItem>

							<ListSubheader label="Level"></ListSubheader>
							<MenuItem value="Easy">Easy</MenuItem>
							<MenuItem value="Medium">Medium</MenuItem>
							<MenuItem value="Hard">Hard</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>
			<Box
				sx={{
					bgcolor: "#003145",
					paddingX: "134px",
					paddingY: "75px",
				}}
			>
				<Grid container colSpacing={0} rowSpacing={8}>
					{dummy
						.filter((data) => {
							if (searchInput === "") return data;
							else if (
								data.name
									.toLowerCase()
									.includes(searchInput.toLowerCase())
							) {
								return data;
							}
						})
						.map((obj, index) => {
							return (
								<Grid item sm={6} md={4} key={index}>
									<Card
										sx={{
											borderRadius: "15px",
											width: "354px",
											height: "473px",
											mx: "auto",
										}}
									>
										<CardMedia
											component="img"
											src={obj.img}
										></CardMedia>
										<CardContent
											sx={{
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												pb: "0",
											}}
										>
											<Box className="stat">
												{" "}
												{status(
													obj.start * 1000,
													obj.end * 1000
												)}{" "}
											</Box>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													alignItems: "center",
													justifyContent: "center",
													width: "246px",
												}}
											>
												<Typography
													variant="h6"
													fontSize="16px"
													fontWeight="600"
													mb="25px"
												>
													{obj.name}
												</Typography>
											</Box>

											<Timer
												start={obj.start * 1000}
												end={obj.end * 1000}
											/>
											<CardActions
												sx={{
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
												}}
											>
												<Button
													variant="contained"
													startIcon={
														<CheckCircleOutlineIcon />
													}
													sx={{
														width: "183px",
														height: "42px",
														borderRadius: "10px",
														bgcolor: "#44924C",
													}}
													onClick={() => {
														navigate(
															"/challengeDetails",
															{ state: obj }
														);
													}}
												>
													<Typography
														variant="body1"
														fontSize="14px"
														fontWeight="600"
													>
														Participate
													</Typography>
												</Button>
											</CardActions>
										</CardContent>
									</Card>
								</Grid>
							);
						})}
				</Grid>
			</Box>
		</>
	);
}

export default Challenges;
