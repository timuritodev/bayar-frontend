export interface ICalculator {
	// building_type: string,
	// roof_type: string,
	building_length: number,
	building_width: number,
	ceiling_height: number,
	door_area: number,
	window_area: number,
	wall_panel_thickness: number,
	roof_panel_thickness: number,
	wall_panel_width: number,
	metal_thickness: number
	insulation_type: string,
	insulation_density: number,
	region: string,
	color: number,
}

export interface ICalculatorState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	total_cost: string;
}