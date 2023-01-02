const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 2,
      data: [1, 2, 3, 4, 5],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "#9BA6FA",
      data: [1, 2, 3, 4, 5, 6],
      borderColor: "#1BA5FA",
      borderWidth: 2,
      borderRadius: 15,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "#6979f8",
      data: [1, 2, 3, 4, 5, 6],
      borderRadius: 15,
    },
  ],
};

export { data };
