import { Grid2 } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

type props = {
  limit?: number;
};

const AnimeGridSkeleton: React.FC<props> = ({ limit }) => {
  const uniqueId = uuidv4();
  return (
    <Grid2 container spacing={2}>
      {Array.from(new Array(limit)).map(() => (
        <Grid2
          className="helloB"
          size={{
            xs: 6,
            sm: 4,
            md: 3,
          }}
          key={uniqueId}
        >
          <AnimeCardSkeleton></AnimeCardSkeleton>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default AnimeGridSkeleton;
