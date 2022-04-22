import React, { useEffect, useMemo } from "react";
import {
	ControlText,
	PageCount,
	PageDiv,
	PageFlex,
	PaginationContainer,
} from "./style";
import backGrey from "assets/backGrey.svg";
import backActivate from "assets/backMain.svg";
import forwardGrey from "assets/forwardGrey.svg";
import forwardActivate from "assets/forwardMain.svg";
import PaginationClass from "./helper";
import { usePaginationContext } from "./PaginationContext";

export default function Pagination({ totalData }) {
	const { pageObj, setPageObj } = usePaginationContext();
	const dataArray = totalData && totalData.results;
	const dataCount = totalData && totalData.count;
	const data = useMemo(
		() => new PaginationClass(dataArray, pageObj, setPageObj),
		[dataArray, pageObj, setPageObj],
	);
	const { numberOfPages, currentPage } = pageObj;
	const enableFirst = numberOfPages > 1 && currentPage > 1;
	const enableLast = numberOfPages > 1 && numberOfPages > currentPage;

	useEffect(() => {
		data.paginateData(dataCount);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataCount, currentPage]);

	return (
		<PaginationContainer>
			<PageDiv>
				<PageFlex activate={enableFirst} onClick={() => data.firstPage()}>
					<img src={enableFirst ? backActivate : backGrey} alt="back" />
					<ControlText>First</ControlText>
				</PageFlex>
				<PageFlex activate={enableFirst} onClick={() => data.prevPage()}>
					<img src={enableFirst ? backActivate : backGrey} alt="back" />
					<ControlText>Prev</ControlText>
				</PageFlex>
				<PageCount>
					<p>
						{currentPage} of {numberOfPages}
					</p>
				</PageCount>
				<PageFlex activate={enableLast} onClick={() => data.nextPage()}>
					<ControlText>Next</ControlText>
					<img src={enableLast ? forwardActivate : forwardGrey} alt="back" />
				</PageFlex>
				<PageFlex activate={enableLast} onClick={() => data.lastPage()}>
					<ControlText>Last</ControlText>
					<img src={enableLast ? forwardActivate : forwardGrey} alt="back" />
				</PageFlex>
			</PageDiv>
		</PaginationContainer>
	);
}
