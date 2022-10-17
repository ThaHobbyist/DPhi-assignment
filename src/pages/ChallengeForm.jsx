import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Cloud from "../assets/assets/icons/bxs_cloud-upload.svg";
import Icon from "@mui/material/Icon";
import { borderRadius, fontSize } from "@mui/system";
import Logo from "../assets/assets/icons/Logo.svg";

const CloudUpload = () => {
	return (
		<Icon>
			<img src={Cloud} height={20} width={20} alt="" />
		</Icon>
	);
};

function ChallengeForm() {
	const [value, setValue] = useState(null);
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
					sx={{
						py: "40px",
						pl: "90px",
						bgcolor: "#F8F9FD",
					}}
				>
					<Typography fontSize="24px" fontWeight="700">
						Challenge Details
					</Typography>
				</Box>
				<Box
					sx={{
						py: "33px",
						pl: "90px",
					}}
				>
					<Box>
						<Typography fontSize="16px">Challenge Name</Typography>
						<TextField
							sx={{
								width: "453px",

								mt: "20px",
								borderRadius: "5px",
							}}
						></TextField>
					</Box>
					<Box
						sx={{
							mt: " 50px",
						}}
					>
						<Typography fontSize="16px" mb="20px">
							Start Date
						</Typography>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								label="Add start Date"
								value={value}
								onChange={(newValue) => {
									setValue(newValue);
								}}
								renderInput={(params) => (
									<TextField {...params} />
								)}
							/>
						</LocalizationProvider>
					</Box>
					<Box
						sx={{
							mt: " 50px",
						}}
					>
						<Typography fontSize="16px" mb="20px" mt="20px">
							End Date
						</Typography>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								label="Add End Date"
								value={value}
								onChange={(newValue) => {
									setValue(newValue);
								}}
								renderInput={(params) => (
									<TextField {...params} />
								)}
							/>
						</LocalizationProvider>
					</Box>
					<Box mt="40px">
						<Typography fontSize="16px">Description: </Typography>
						<TextField
							multiline
							sx={{
								width: "817px",

								mt: "20px",
							}}
						></TextField>
					</Box>
					<Box mt="40px">
						<Typography>Image</Typography>
						<Button
							variant="outlined"
							endIcon={
								<CloudUpload
									sx={{
										my: "auto",
									}}
								/>
							}
							sx={{
								bgcolor: "#F4F4F4",
								color: "#666666",
								borderColor: "#D9D9D9",
								display: "flex",
								alignContent: "center",
								py: "10px",
								mt: "20px",
								width: "236px",
							}}
						>
							upload
						</Button>
					</Box>
					<Box mt="40px">
						<Typography>Level Type</Typography>
						<TextField
							select
							label="Choose"
							sx={{
								width: "236px",
								mt: "20px",
							}}
						>
							<MenuItem value={1}>Easy</MenuItem>
							<MenuItem value={2}>Medium</MenuItem>
							<MenuItem value={3}>Hard</MenuItem>
						</TextField>
						{/* <FormControl>
							<InputLabel id="demo-simple-select-label">
								Level Type
							</InputLabel>
							<Select

							// value={age}

							// onChange={handleChange}
							>
								<MenuItem value={1}>Easy</MenuItem>
								<MenuItem value={2}>Medium</MenuItem>
								<MenuItem value={3}>Hard</MenuItem>
							</Select>
						</FormControl> */}
					</Box>
					<Button
						variant="contained"
						sx={{
							mt: "40px",
							bgcolor: "#44924C",
							color: "white",
							borderRadius: " 10px",
							fontSize: "18px",
						}}
					>
						Create Challenge
					</Button>
				</Box>
			</Box>
		</>
	);
}

export default ChallengeForm;
