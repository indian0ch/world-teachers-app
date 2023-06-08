import { arrayFromAPI } from "./Lab5/RequestToAPI.js";
import { percentageSearch } from "./percentageSearch.js";

const generateGenderGraph = () => {
  const genderStat = document.getElementById("myChart1");
  const percantageMale = percentageSearch(arrayFromAPI, "gender", "Male");
  const percantageFemale = percentageSearch(arrayFromAPI, "gender", "Female");
  const data = [
    { gender: "Male", count: percantageMale },
    { gender: "Female", count: percantageFemale },
  ];

  new Chart(genderStat, {
    type: "bar",
    data: {
      labels: data.map((row) => row.gender),
      datasets: [
        {
          label: "Gender",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
};

const generateSubjectGraph = () => {
  const subjectStat = document.getElementById("myChart2");
  const percantageArt = percentageSearch(arrayFromAPI, "course", "Art");
  const percantagePhysics = percentageSearch(arrayFromAPI, "course", "Physics");
  const percantageMedicine = percentageSearch(
    arrayFromAPI,
    "course",
    "Medicine"
  );
  const percantageChemistry = percentageSearch(
    arrayFromAPI,
    "course",
    "Chemistry"
  );
  const percantageBiology = percentageSearch(arrayFromAPI, "course", "Biology");
  const percantageLaw = percentageSearch(arrayFromAPI, "course", "Law");
  const percantageDancing = percentageSearch(arrayFromAPI, "course", "Dancing");
  const data = [
    { course: "Art", count: percantageArt },
    { course: "Physics", count: percantagePhysics },
    { course: "Medicine", count: percantageMedicine },
    { course: "Chemistry", count: percantageChemistry },
    { course: "Biology", count: percantageBiology },
    { course: "Law", count: percantageLaw },
    { course: "Dancing", count: percantageDancing },
  ];

  new Chart(subjectStat, {
    type: "pie",
    data: {
      labels: data.map((row) => row.course),
      datasets: [
        {
          label: "Subject",
          data: data.map((row) => row.count),
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production",
      },
    },
  });
};

generateGenderGraph();
generateSubjectGraph();
