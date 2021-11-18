import React from "react";
import styled from "styled-components";
import { UseTodoState } from "../provider/todoContext";
import moment from "moment";

const Header = (props) => {
  const TodoHeadBlock = styled.div`
    color: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background: rgb(237, 187, 255);
    background: linear-gradient(
      90deg,
      rgba(237, 187, 255, 1) 0%,
      rgba(133, 179, 250, 1) 100%
    );
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2em;
    }
    .task__text {
      font-size: 1.8rem;
      margin-right: 1rem;
      animation: fadein 1s;
      -webkit-animation: fadein 1s; /* Safari and Chrome */
    }
    .task__type__text {
      font-size: 1.6rem;
      font-weight: 300;
    }
    .task__done {
      font-weight: 500;
      color: #ff6b6b;
      font-size: 1.8rem;
      animation: fadein 3s;
      -webkit-animation: fadein 3s; /* Safari and Chrome */
    }
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @-webkit-keyframes fadein {
      /* Safari and Chrome */
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  const todos = UseTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const DayBlock = styled.div`
    display: flex;
    align-items: flex-start;
    color: white;
    .day__column {
      display: flex;
      flex-direction: column;
      font-size: 2rem;
      margin-left: 1rem;
    }
    .day {
      font-size: 4rem;
      font-weight: 500;
    }
    .date__string {
      font-weight: 300;
    }
  `;

  const CalendarBlock = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;

    margin-top: 1.5rem;
  `;
  const DatesBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const day = today.toLocaleDateString("en-US", { day: "numeric" });
  console.log("day:", moment().day(7));
  const dates = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var theYear = today.getFullYear();
  var theMonth = today.getMonth();
  var theDate = today.getDate();
  var theDayOfWeek = today.getDay();
  // 이번 주 날짜 구하기
  const thisWeek = [];
  for (let i = 0; i < 7; i++) {
    var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
    var mm = Number(resultDay.getMonth()) + 1;
    var dd = resultDay.getDate();

    mm = String(mm).length === 1 ? "0" + mm : mm;
    dd = String(dd).length === 1 ? "0" + dd : dd;

    thisWeek[i] = dd;
  }
  console.log("day", thisWeek);
  return (
    <TodoHeadBlock>
      <DayBlock>
        <span className="day">{day}</span>
        <div className="day__column">
          <span className="weekday">{dayName}</span>
          <span className="date__string">{dateString}</span>
        </div>
      </DayBlock>
      <CalendarBlock>
        {dates.map((date, idx) => (
          <DatesBlock key={idx}>
            <span>{date}</span>
            <span>{thisWeek[idx]}</span>
          </DatesBlock>
        ))}
      </CalendarBlock>

      <div className="task">
        {undoneTasks.length === 0 && todos.length !== 0 ? (
          <span className="task__done">ALL CLEAR!👏👏</span>
        ) : (
          <span className="task__text">{undoneTasks.length} Tasks Left!</span>
        )}
        <span className="task__type__text">Add a new Goal!✨</span>
      </div>
    </TodoHeadBlock>
  );
};

export default Header;
