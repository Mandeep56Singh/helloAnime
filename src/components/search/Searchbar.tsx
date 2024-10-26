import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import SearchResult from "./SearchResult";

const SearchBarContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: 10,
  background: theme.palette.primary.main,
  boxShadow: "none",
  borderRadius: "0",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  flex: 1,
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.secondary.contrastText,
  borderRadius: theme.shape.borderRadius,
  paddingLeft: 10,
  paddingBlock: 2,
}));

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debounceSearch = useDebounce(searchQuery);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only show results if there's a valid search query
    if (debounceSearch.trim().length > 2) {
      setShowSearchResult(true);
      if (onSearch) onSearch(debounceSearch);
    } else {
      setShowSearchResult(false);
    }
  }, [debounceSearch, onSearch]);

  useEffect(() => {
    setSearchQuery("");
    setShowSearchResult(false);
  }, [location]);
  
  const handleSearch = () => {
    const value = searchQuery.trim();
    console.log(value);
    if(value && (value.length > 2)) {
      navigate(`search/${value}`);
    }
  };

  return (
    <Box>
      <SearchBarContainer>
        <Button
          variant="contained"
          type="button"
          aria-label="filter"
          onClick={handleSearch}
        >
          <FilterAltIcon />
        </Button>
        <StyledInputBase
          placeholder={placeholder}
          value={searchQuery}
          ref={inputRef}
          onChange={(e) => setSearchQuery(e.target.value)}
          inputProps={{ "aria-label": "search" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                type="button"
                aria-label="search"
                onClick={handleSearch}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </SearchBarContainer>
      {showSearchResult && <SearchResult searchQuery={debounceSearch} />}
    </Box>
  );
};

export default SearchBar;
