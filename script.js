
// BAR CHART
new Chart(document.getElementById("barChart"), {

    type: "bar",

    data: {
        labels: [
            "Households",
            "Residents",
            "Water Systems",
            "Institutions"
        ],

        datasets: [{
            label: "Project Targets",

            data: [2000, 1000, 500, 15],

            backgroundColor: [
                "#007d91",
                "#00a9bd",
                "#45c4c9",
                "#80d8d0"
            ],

            borderRadius: 5
        }]
    },

    options: {
        responsive: true,

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

});


// PIE CHART
new Chart(document.getElementById("pieChart"), {

    type: "pie",

    data: {
        labels: [
            "Households",
            "Residents Trained",
            "Water Systems",
            "Institutions"
        ],

        datasets: [{

            data: [2000, 1000, 500, 15],

            backgroundColor: [
                "#007d91",
                "#00a9bd",
                "#45c4c9",
                "#80d8d0"
            ],

            borderColor: "#ffffff",
            borderWidth: 2

        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }

});
