import { type Post } from '../types/posts'

export function PostList({ posts }: { posts: Post[] }) {
  posts.map((post) => {
    const { id, content, user } = post
  })
}
