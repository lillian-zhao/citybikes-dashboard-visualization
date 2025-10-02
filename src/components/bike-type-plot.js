import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function bike_type_plot(data, { width } = {}) {
    // if needed, variables can be created here

    const plot_data = [
        { type: "Normal Bikes", count: data.normal_bikes },
        { type: "E-Bikes", count: data.ebikes }
    ];
    
    const total_slots = data.normal_bikes + data.ebikes + data.empty_slots;

    return Plot.plot({
        title: // CHALLENGE 7.1 - Your code here ,
            `Bike Availability at ${data.name}`,
        marks: [
            // CHALLENGE 7.2
            // Your code here
            Plot.barY(plot_data, {
                x: "type",
                y: "count",
                fill: "type",
                tip: true
            })
        ],
        x: {
            // CHALLENGE 7.3
            // Your code here
            label: "Bike Type"
        },
        y: {
            // CHALLENGE 7.4
            // Your code here
            label: "Number of Bikes",
            ticks: d3.range(0, total_slots),
            domain: [0, total_slots],
            grid: true
        },
        color: {
            // CHALLENGE 7.5
            // Your code here
            domain: ["Normal Bikes", "E-Bikes"],
            range: ["#0cdbffff", "#28df46ff"],
            legend: true
        },
        marginLeft: 80,
        width: width,
        height: 500,
        marginBottom: 50
    })
}