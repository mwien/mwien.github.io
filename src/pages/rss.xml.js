import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_GEN_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_GEN_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
