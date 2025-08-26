export interface IBookFilterQuery {
	filter: string;
	sortBy: string;
	sort: "asc" | "desc" | "ascending" | "descending" | 1 | -1;
	limit: number;
}
