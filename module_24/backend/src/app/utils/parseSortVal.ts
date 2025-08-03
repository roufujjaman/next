export function parseSortVal(val: any) {
	switch (val) {
		case "1":
			return 1;
		case "-1":
			return -1;
		case undefined:
			return 1;
		default:
			return val;
	}
}
