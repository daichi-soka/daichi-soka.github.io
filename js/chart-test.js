//htmlからグラフを描画する要素(canvas) を取得する
var ctx = document.getElementById("bar").getContext("2d");

var barChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Red", "Blue", "Green","Orange","Black"],
        datasets: [
            {
                type: "bar",
                label:"hogehoge",
                data: [21, 31, 53,65,92],
                backgroundColor: [
                    "rgba(255,99,132,0.2)",
                    "rgba(54,162,235,0.2)",
                    "rgba(1,206,86,0.2)",
                    "rgba(200,100,1,0.2)",
                    "rgba(1,2,3,0.2)",

        ]
    }

        ]
    },
    options: {
        scales: {
            yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
            }

            ]
        }
    }
});
