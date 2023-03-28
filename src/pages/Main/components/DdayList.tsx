import styled from "styled-components";
import CalendarSrc from "assets/calendar.png";
import { Schedule } from "types/types";

interface IScheduleList {
  scheduleList: Array<Schedule>;
}

const DdayList = ({ scheduleList }: IScheduleList) => {
  return (
    <Container>
      {scheduleList.length > 0
        ? scheduleList.map((schedule, i) => {
            return (
              <ScheduleContainer>
                <CalenDarImg src={CalendarSrc} />
                <ScheduleContent>
                  <ScheduleTitle>{schedule.title}</ScheduleTitle>
                  <ScheduleDay>{schedule.day}</ScheduleDay>
                  <Dday>{schedule.dday}</Dday>
                  <TimeRemaining>{schedule.timeRemaining}</TimeRemaining>
                </ScheduleContent>
              </ScheduleContainer>
            );
          })
        : ""}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScheduleContainer = styled.div`
  display: flex;
  width: 40%;
  height: 200px;

  border: 1px solid lightgray;
  border-radius: 15px;

  &:first-child {
    margin-top: 50px;
  }
  margin-bottom: 50px;

  background-color: white;
`;

const CalenDarImg = styled.img`
  width: 120px;
  height: 120px;
  margin-left: 10px;
  margin-top: 10px;
`;

const ScheduleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding: 10px;
`;

const ScheduleTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  margin: 30px 0 8px;
`;

const ScheduleDay = styled.p`
  font-size: 15px;
  color: #3b3b3b;
  line-height: 22px;
`;

const Dday = styled.p`
  margin: 30px 30px 8px auto;
  font-size: 30px;
  font-weight: bold;
  color: #ffb217;
`;

const TimeRemaining = styled.p`
  margin-left: auto;
  margin-right: 30px;
  font-size: 14px;
  line-height: 22px;
  color: #3b3b3b;
`;

export default DdayList;
