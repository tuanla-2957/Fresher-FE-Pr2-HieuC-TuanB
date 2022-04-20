import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({ totalPage, page, handleChange }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPage}
        page={page}
        shape='rounded'
        onChange={handleChange}
      />
    </Stack>
  );
}
