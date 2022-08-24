import { Button, CircularProgress, Grid, TextField } from "@mui/material";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { setNamePlayerOne } from "../store/player/playerSlice";
import { signIn } from "../store/game/thunks";
import { useEffect, useState } from "react";
import { useSetStatus } from "../hooks/useSetStatus";

const initialState: { fullname: string } = {
  fullname: "",
};

export const NewGame = () => {
  const { roomId } = useSetStatus();
  const { fullname, onInputChange } = useForm(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const startGame = () => {
    setIsLoading(true);
    dispatch(setNamePlayerOne(fullname));
    dispatch(signIn(fullname));
  };

  useEffect(() => {
    if (roomId) {
      setIsLoading(false);
    }
  }, [roomId]);

  return isLoading ? (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ gap: "50px" }}
    >
      <h4 style={{ fontSize: "30px" }}>Getting the code room</h4>
      <CircularProgress size="60px" />
    </Grid>
  ) : (
    <Grid
      container
      justifyContent="space-evenly"
      alignSelf="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "500px", height: "400px" }}
      className="animate__animated animate__fadeInUp glass-efect"
    >
      <h3 className="your-name">Your Name</h3>
      <TextField
        type="text"
        placeholder="Your Name"
        fullWidth
        name="fullname"
        value={fullname}
        onChange={onInputChange}
      />
      <Button
        onClick={startGame}
        sx={{ fontSize: "20px", border: "solid 1px" }}
      >
        <ArrowForwardTwoToneIcon />
        Start
      </Button>
    </Grid>
  );
};
