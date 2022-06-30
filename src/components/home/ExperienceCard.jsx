import React from "react";

import { Col } from "react-bootstrap";
const ExperienceCard = ({ data }) => {
  const durationOfExperience = (startYear, startMonth, endYear, endMonth) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    let start = Number(startYear) * 12 + Number(startMonth);

    let lastMonth = endMonth === 0 ? currentMonth : endMonth;
    let lastYear = endYear === 0 ? currentYear : endYear;

    let end = Number(lastYear) * 12 + Number(lastMonth);
    let diff = Number(end) - Number(start) + 1;

    let year = Math.floor(Number(diff) / 12);
    let month = Number(diff) % 12;

    let yearString = year === 1 ? "year" : "years";
    let monthString = month === 1 ? "month" : "months";
    if (year > 0) {
      if (month > 0) {
        return `${year} ${yearString}, ${month} ${monthString}`;
      } else {
        return `${year} ${yearString}`;
      }
    } else {
      return `${month} ${monthString}`;
    }
  };
  return (
    <Col lg="12">
      <div className="pb-5 text-center">
        <img
          className=" bg-white mb-3 center"
          src={data.companylogo}
          alt=""
          width="100%"
          maxWidth="200px"
        />
        {/* <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p> */}
        {data.rolesAndDate.map(val => {
          return (
            <>
              <h3 className="text-muted">{val.role}</h3>
              <p className="lead">
                {val.date} ·{" "}
                {durationOfExperience(
                  val.startYear,
                  val.startMonth,
                  val.endYear,
                  val.endMonth
                )}
                <br />
                {val.location}
              </p>
            </>
          );
        })}
      </div>
    </Col>
  );
};

export default ExperienceCard;
