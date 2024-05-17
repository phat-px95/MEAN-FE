export type BasePost = {
	title: string,
	content: string,
}

export type DBPost = BasePost & {
	_id: string,
}
export type Post = BasePost & {
	id?: string,
}