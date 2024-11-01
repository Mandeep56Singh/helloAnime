import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Stack,
} from "@mui/material";
import { ListAvatarSkeleton } from "./ListAvatarSkeleton";

const AnimeListSkeleton = () => {
 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        marginBottom: 1,
      }}
    >
      <ListItem component={Stack} direction={"row"} spacing={2}>
        <ListItemAvatar>
          <ListAvatarSkeleton></ListAvatarSkeleton>
        </ListItemAvatar>
        <ListItemText
          primary={<Skeleton width="60%" />}
          secondary={
            <Stack direction="row" spacing={2} alignItems="center">
              <Skeleton width={40} height={24} />
              <Skeleton width={60} />
            </Stack>
          }
        />
      </ListItem>
    </Box>
  );
};

export default AnimeListSkeleton;
