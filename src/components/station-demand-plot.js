import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function station_demand_plot(network_data, station_data, { width } = {}) {
    // if needed, variables can be created here
    const network_name = network_data.name;

    return Plot.plot({
        title: `Station Demand for ${network_name}`,// CHALLENGE 6.1 - Your code here
        marks: [
            // CHALLENGE 6.2
            // Your code here
            Plot.barY(
                station_data,
                {
                    x: "name",
                    y: "empty_slots",
                    sort: { x: "y" },
                    tip: true,       
                    fill: "steelblue"  
                }
            )
        ],
        x: {
            // CHALLENGE 6.3
            // Your code here
            label: "Station Location",
            tickRotate: -45,
            tickSize: 5,
            padding: 0.5
        },
        y: {
            // CHALLENGE 6.4
            // Your code here
            label: "Empty Charging Slots",
            grid: true
        },
        // CHALLENGE 6.5
        marginLeft: 80,
        width: width,
        height: 600,
        marginBottom: 200
    });
}