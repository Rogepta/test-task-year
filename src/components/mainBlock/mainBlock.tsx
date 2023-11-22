import React from "react";
import { category } from "../../api/category.api";

export const MainBlock = () => {
  return (
    <section>
      <h2>Исторические даты</h2>
      <div className="block container">
        {category.map((data) => {
          return (
            <>
              <div className="title">{data.title}</div>
              {data.dates.map((e) => {
                return (
                  <div className="year event">{e.year + " " + e.event}</div>
                );
              })}
            </>
          );
        })}
      </div>
    </section>
  );
};
