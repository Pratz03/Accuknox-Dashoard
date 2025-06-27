import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import React from "react";

function SearchComponent({
  setSearchTerm,
}: {
  setSearchTerm: (term: string) => void;
}) {
  const theme = useTheme();
  return (
    <div>
      <Autocomplete
        freeSolo
        disableClearable
        options={[]}
        onInputChange={(event, newInputValue) => {
          setSearchTerm(newInputValue.toLowerCase());
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search anything..."
            size="small"
            sx={{
              backgroundColor: theme.palette.background.default,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.divider,
              },
              borderRadius: "8px",
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              type: "search",
            }}
          />
        )}
      />
    </div>
  );
}

export default SearchComponent;
