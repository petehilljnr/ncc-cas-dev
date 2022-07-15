import { DayOfWeek } from "./DayOfWeekChart";
import { HourChart } from "./HourChart";
import { MonthChart } from "./MonthChart";
import { RoadConditionChart } from "./RoadConditionChart";
import { RoadTypeChart } from "./RoadTypeChart";
import { SeverityChart } from "./SeverityChart";
import { TlaChart } from "./TlaChart";
import { YearChartBar } from "./YearChartBar";

export const charts = [
  { group: "Date and Time", components: [ YearChartBar,MonthChart,  DayOfWeek, HourChart ] },
  { group: "Location", components:[TlaChart, RoadTypeChart]  },
];
