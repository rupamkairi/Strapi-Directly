export function showBlogDate(blog: any) {
  const { createdAt, publishedAt } = blog.attributes;

  if (publishedAt) return new Date(publishedAt).toDateString();
  else if (createdAt) return new Date(createdAt).toDateString();
  else "Strange, No Publishing or Creation date!";
}
