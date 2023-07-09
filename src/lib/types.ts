export type Categories = 'test' | 'too cool for school' | 'tigers';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
