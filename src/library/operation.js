class Operation {
	constructor(type, callback = null, data = null) {
		this.type = type;
		this.callback = callback;
		this.data = data;
	}
}

export default Operation;
