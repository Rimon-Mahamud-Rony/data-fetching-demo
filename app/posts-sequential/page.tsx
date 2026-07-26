import CommonPageDesign from "../components/commonPageDesign";
import { Author } from "./author";
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export default async function PostSequential() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();

    const filterPosts = posts.filter((post) => post.id % 10 === 1);
    return (
      <CommonPageDesign>
        <section className="relative w-full sm:w-3/4 rounded-md border border-cyan-100 bg-slate-800 p-12 shadow-4xl backdrop-blur-4xl text-slate-200">
          <h1 className="text-2xl font-bold mb-4">
            Users for Server Component
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-2xl border border-cyan-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80"
                    alt="User Avatar"
                    className="h-16 w-16 rounded-full border-2 border-cyan-300 object-cover shadow-md"
                  />

                  <div>
                    <h2 className="text-lg font-semibold text-cyan-500">
                      {post.title}
                    </h2>
                    <hr className="text-cyan-500" />
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600">
                  <div>
                    <p>{post.body}</p>
                  </div>

                  <div>
                    <Author userId={post.userId}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </CommonPageDesign>
    );
}