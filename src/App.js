import { useFetch } from "hooks/useFetch";
import Pagination from "./pagination/Pagination";
import { usePaginationContext } from "./pagination/PaginationContext";
import { swapi } from "./routes/backend";
import Table from "./table/Index";

function App() {
	const { pageObj } = usePaginationContext();
	const { currentPage, paginatedData } = pageObj;
	const { response, loading } = useFetch(swapi(currentPage));

	return (
		<>
			{loading && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					style={{
						margin: "auto",
						background: "none",
						display: "block",
						shapeRendering: "auto",
					}}
					width="50px"
					height="50px"
					viewBox="0 0 100 100"
					preserveAspectRatio="xMidYMid"
				>
					<circle
						cx="50"
						cy="50"
						fill="none"
						stroke="#6619d2"
						strokeWidth="10"
						r="35"
						strokeDasharray="164.93361431346415 56.97787143782138"
					>
						<animateTransform
							attributeName="transform"
							type="rotate"
							repeatCount="indefinite"
							dur="1s"
							values="0 50 50;360 50 50"
							keyTimes="0;1"
						></animateTransform>
					</circle>
				</svg>
			)}
			<Table data={paginatedData} />
			<Pagination totalData={response} />
		</>
	);
}

export default App;
