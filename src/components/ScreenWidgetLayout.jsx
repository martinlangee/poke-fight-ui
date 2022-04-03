import "../App.css";
import React from "react";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import LabelEdit from "../controls/LabelEdit";

const ScreenWidgetLayout = ({ index, data, onSave }) => {
  const NAME_WIDTH = "150px";
  const DATA_WIDTH = "80px";

  const saveLocal = (dbField, value) => {
    onSave(index, dbField, value);
  };

  return (
    <Stack>
      {/* Header line: printed only once above the first widget */}
      {!index ? (
        <Stack direction="row" spacing={1} mb={1}>
          <Box minWidth={NAME_WIDTH} pl={1}>
            <strong>Name</strong>
          </Box>
          <Box minWidth={DATA_WIDTH}>
            <strong>Left</strong>
          </Box>
          <Box variant="button" minWidth={DATA_WIDTH}>
            <strong>Top</strong>
          </Box>
          <Box variant="button" minWidth={DATA_WIDTH}>
            <strong>Width</strong>
          </Box>
          <Box variant="button" minWidth={DATA_WIDTH}>
            <strong>Height</strong>
          </Box>
        </Stack>
      ) : (
        ""
      )}
      {data ? (
        <Stack
          direction="row"
          spacing={1}
          sx={{ "&:hover": { backgroundColor: "#e8f8ff" } }}
        >
          <Box pl={1} mr={-1} minWidth={NAME_WIDTH} display="flex">
            <Box my="auto">{data.name}</Box>
          </Box>
          <LabelEdit
            dbField="x_pos"
            onSave={saveLocal}
            initValue={data.x_pos}
            width={DATA_WIDTH}
          />
          <LabelEdit
            dbField="y_pos"
            onSave={saveLocal}
            initValue={data.y_pos}
            width={DATA_WIDTH}
          />
          <LabelEdit
            dbField="size_x"
            onSave={saveLocal}
            initValue={data.size_x}
            width={DATA_WIDTH}
          />
          <LabelEdit
            dbField="size_y"
            onSave={saveLocal}
            initValue={data.size_y}
            width={DATA_WIDTH}
          />
        </Stack>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default ScreenWidgetLayout;
