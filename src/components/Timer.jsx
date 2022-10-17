import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DisplayTime from "./DisplayTime";
var moment = require("moment");

function Timer({ start, end }) {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [deadline, setDeadline] = useState(0);
	const [over, setOver] = useState("start");

	useEffect(() => {
		if (Date.now() < start) {
			setDeadline(start);
			setOver("start");
		} else if (Date.now() < end) {
			setDeadline(end);
			setOver("end");
		} else setOver("ended");

		console.log(deadline);
	}, [start, end, deadline]);

	const getTime = () => {
		const time = deadline - Date.now();

		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};

	useEffect(() => {
		const interval = setInterval(() => getTime(deadline), 1000);

		return () => clearInterval(interval);
	}, []);

	var formatted = moment(end).format("LLL");

	return (
		<>
			{over === "ended" ? (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography variant="body1" fontSize="14px">
						Ended on
					</Typography>
					<Typography variant="subtitle1">{formatted}</Typography>
				</Box>
			) : over === "start" ? (
				<Box
					className="timer"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography variant="body1" fontSize="14px">
						Starts in
					</Typography>

					<DisplayTime
						days={days}
						hours={hours}
						minutes={minutes}
						seconds={seconds}
					></DisplayTime>
				</Box>
			) : (
				<Box
					className="timer"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography variant="body1" fontSize="14px">
						Ends in
					</Typography>
					<DisplayTime
						days={days}
						hours={hours}
						minutes={minutes}
						seconds={seconds}
					></DisplayTime>
				</Box>
			)}
		</>
	);
}

export default Timer;
