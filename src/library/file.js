class File {
	constructor(id, name) {
		this.id = id;
		const title = name.substring(0, name.lastIndexOf('.'));
		const extension = name.substring(name.lastIndexOf('.'));
		this.input = title;
		this.output = title;
		this.extension = extension;
		this.selected = false;
	}
}

export default File;
