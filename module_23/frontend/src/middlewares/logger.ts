const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.info("Prev State", store.getState());

	const result = next(action);

	console.info("Next State", store.getState());
	console.groupEnd();

	return result;
};

export default logger;
