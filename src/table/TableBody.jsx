import React from "react";
import { TableBodyContainer } from "./style";
import TableData from "./TableData";
import { Table } from "./helper";

export default function TableBody({ data = [] }) {
	const table = new Table();
	return (
		<TableBodyContainer>
			{data.map(
				(
					{ climate, name, rotation_period, population, terrain, created },
					index,
				) => (
					<TableData
						key={index}
						sn={index + 1}
						terrain={terrain}
						name={name}
						climate={climate}
						population={population}
						rotation_period={rotation_period}
						created={table.dateModifierWithYear(created)}
					/>
				),
			)}
		</TableBodyContainer>
	);
}
