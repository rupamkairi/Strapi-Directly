import { Fragment, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [blogs, setBlogs] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const _blogsResponse = await (
        await axios.get(
          "http://localhost:1337/api/blogs?publicationState=preview"
        )
      ).data;
      // console.log(_blogsResponse.data);
      setBlogs(_blogsResponse.data);
    })();
  }, []);

  return (
    <Fragment>
      <div className="h-screen">
        <div className="flex">
          <div className="flex-1">
            <h1>Blogs List</h1>
            {/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}
            {blogs.map((blog: any) => (
              <div>
                <p className="font-mono">{blog.attributes.Title}</p>
              </div>
            ))}
          </div>
          <div className="flex-1">Blog Content</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
