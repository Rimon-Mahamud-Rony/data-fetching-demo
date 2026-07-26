import CommonPageDesign from "@/app/components/commonPageDesign";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUserPosts(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );

  return response.json();
}

async function getUserAlbums(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  );

  return response.json();
}

export default async function UserProfile({params} : {params: Promise <{id: string}>}) {
  
    /*const { id } = await params;


    const resolvedParams = await params;
    const id = resolvedParams.id;

    const id = params.id;
    const slug = params.slug;
    const category = params.category;

    তাহলে অনেক লাইন লাগবে। এর বদলে
    const { id, slug, category } = params;*/

    const resolvedParams = await params;
    const id = resolvedParams.id;

    const postsData = getUserPosts(id); 
    const albumData = getUserAlbums(id);

    const [posts, albums] = await Promise.all([postsData, albumData]);

    return (
      <CommonPageDesign>
        <section className="relative w-full sm:w-3/4 rounded-md border border-cyan-100 bg-slate-800 p-12 shadow-4xl backdrop-blur-4xl text-slate-200">
          <h1 className="text-2xl font-bold mb-4"> User Profile of {id} </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {posts.map((post: Post) => (
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
                    <h2 className="text-lg font-semibold text-slate-800">
                      {post.title}
                    </h2>

                    <p className="text-sm text-cyan-600">{post.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-bold mb-4"> Album of {id} </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {albums.map((album: Album) => (
              <div
                key={album.id}
                className="rounded-2xl border border-cyan-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80"
                    alt="User Avatar"
                    className="h-16 w-16 rounded-full border-2 border-cyan-300 object-cover shadow-md"
                  />

                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">
                      {album.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </CommonPageDesign>
    );
}