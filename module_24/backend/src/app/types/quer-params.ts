export interface BookFilterQuery {
	filter: string;
	sortBy: string;
	sort: "asc" | "desc" | "ascending" | "descending" | 1 | -1;
	limit: number;
}
