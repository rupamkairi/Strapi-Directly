import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { showBlogDate } from "./utils/dateutils";

function App() {
  const [blogs, setBlogs] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const _blogsResponse = await (
        await axios.get(
          "http://localhost:1337/api/blogs?populate=*&publicationState=preview"
        )
      ).data;
      // console.log(_blogsResponse.data);
      setBlogs(_blogsResponse.data);
    })();
  }, []);

  const [showBlog, setShowBlog] = useState<any>(null);

  return (
    <Fragment>
      <div className="h-screen">
        <div className="row h-100 overflow-hidden justify-content-evenly">
          <div className="col h-100 overflow-auto">
            <div className="container">
              <div className="sticky-top pb-4">
                <h1 className="fw-bolder">Blogs</h1>
              </div>
              {/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}
              {blogs.map((blog: any) => (
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setShowBlog(blog);
                  }}
                >
                  <div className="border alert alert-light" role="alert">
                    <p className="display-6">{blog.attributes.Title}</p>
                    <div className="d-flex justify-content-between">
                      By, {blog.attributes.user.data.attributes.username}
                      <small className="text-sm text-muted">
                        On {showBlogDate(blog)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col h-100 overflow-auto bg-light bg-gradient">
            <div className="container">
              {/* <pre>{JSON.stringify(showBlog, null, 2)}</pre> */}
              {!showBlog && (
                <div className="text-muted text-center mt-4">
                  Select any Blog to read.
                </div>
              )}
              <div className="sticky-top pb-4 bg-light">
                <h1 className="fw-bolder">{showBlog?.attributes.Title}</h1>
              </div>
              <div className="">
                <article>{showBlog?.attributes.Content}</article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
