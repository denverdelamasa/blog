import { GraphQLClient, gql } from "graphql-request";
import type { PostMeta } from "./posts";

const GITHUB_OWNER = "denverdelamasa";
const GITHUB_REPO = "blog";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

// Helper: Get engagement for each discussion (by post title)
async function fetchDiscussions(slugs: string[], posts: PostMeta[]) {
  const query = gql`
    query {
      repository(owner: "${GITHUB_OWNER}", name: "${GITHUB_REPO}") {
        discussions(first: 50) {
          nodes {
            title
            number
            comments {
              totalCount
            }
            reactionGroups {
              content
              users {
                totalCount
              }
            }
          }
        }
      }
    }
  `;

  const data = await client.request(query);
  const discussions = data.repository.discussions.nodes;
  console.log("Fetched discussions:", discussions);

  const engagement: Record<string, number> = {};

  for (const slug of slugs) {
    const post = posts.find(p => p.slug === slug);
    if (!post) {
      engagement[slug] = 0;
      continue;
    }
    // Match by slug instead of title if your discussion titles are slugs
      const discussion = discussions.find((d: any) => d.title === `blog/${slug}`);    if (discussion) {
      const commentCount = discussion.comments.totalCount;
      const reactionCount = discussion.reactionGroups.reduce(
        (sum: number, group: any) => sum + group.users.totalCount,
        0
      );
      engagement[slug] = commentCount + reactionCount;
    } else {
      engagement[slug] = 0;
    }
  }

  return engagement;
}

// Main: Get top N popular posts by engagement
export async function getPopularPosts(posts: PostMeta[], topN = 3): Promise<string[]> {
  const slugs = posts.map(p => p.slug);
  const engagement = await fetchDiscussions(slugs, posts);

  console.log("Engagement scores:", engagement);

  // Sort slugs by engagement score, descending
  return Object.entries(engagement)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([slug]) => slug);
}