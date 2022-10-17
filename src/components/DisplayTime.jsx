import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function DisplayTime({ days, hours, minutes, seconds }) {
	return (
		<>
			<Box
				sx={{
					display: "flex",
				}}
			>
				<Box
					sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems: 'center',
                        justifyContent: 'center',
						m: 1,
					}}
				>
					<Typography
						fontSize="18px"
						fontWeight="600"
						color="#454545"
					>
						{" "}
						{days}{" "}
					</Typography>
					<Typography fontSize="10px" > Days </Typography>
				</Box>
				<Typography sx={{my: 'auto'}}> : </Typography>
				<Box
					sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems: 'center',
                        justifyContent: 'center',
						m: 1,
					}}
				>
					<Typography
						fontSize="18px"
						fontWeight="600"
						color="#454545"
					>
						{" "}
						{hours}{" "}
					</Typography>
					<Typography fontSize="10px" > Hours </Typography>
				</Box>
				<Typography sx={{my: 'auto'}}> : </Typography>
				<Box
					sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems: 'center',
                        justifyContent: 'center',
						m: 1,
					}}
				>
					<Typography
						fontSize="18px"
						fontWeight="600"
						color="#454545"
					>
						{" "}
						{minutes}{" "}
					</Typography>
					<Typography fontSize="10px" > Minutes </Typography>
				</Box>
				<Typography sx={{my: 'auto'}}> : </Typography>
				<Box
					sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems: 'center',
                        justifyContent: 'center',
						m: 1,
					}}
				>
					<Typography
						fontSize="18px"
						fontWeight="600"
						color="#454545"
					>
						{" "}
						{seconds}{" "}
					</Typography>
					<Typography fontSize="10px" > Seconds </Typography>
				</Box>
			</Box>
		</>
	);
}

export default DisplayTime;
