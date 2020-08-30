import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import "./search.css";
import { Button } from "@material-ui/core";

export default function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate,
    endDate,
    key: "selection"
  };

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>

      <input min={0} defaultValue={2} type="number" />
      <Button variant="outlined">Search AirBnB</Button>
    </div>
  );
}
