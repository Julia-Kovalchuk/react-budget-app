import { StylesConfig } from "react-select";
import { ISelectOption } from "../../types";
import { Color } from "../../ui/colors";

export const CustomStyles: StylesConfig<ISelectOption> = {
  control: (styles) => ({
    ...styles,
    minWidth: "75px",
    marginTop: "-30px",
    borderRadius: "5px",
    position: "relative",
    fontSize: "12px",
    color: Color.Black,
    border: `1px solid ${Color.Gray_light}`,
  }),
  indicatorSeparator: () => ({
    width: 0,
  }),
};
