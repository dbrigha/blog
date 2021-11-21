import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Post } from "./models/post.model";
import { PostView } from "./view-models/post.view";
const md = require('markdown-it')();
require("./models/_blog-context");

const httpTrigger: AzureFunction = async function (context: Context): Promise<void> {
  try {
    const activePosts = await Post.findAll({
      where: {
        isDeleted: false
      }
    });
    var viewModels = activePosts.map(activePost => {
      const postView: PostView = {
        id: activePost.id,
        title: activePost.title,
        subtitle: activePost.subtitle,
        markDown: activePost.markDown,
        content: md.render(activePost.markDown),
        createdDate: activePost.createdDate,
        updatedDate: activePost.updatedDate,
      };
      return postView;
    });
    context.res = {
      status: 200,
      body: viewModels
    };
  } catch (e: any) {
    context.res = {
      status: 500
    };
  }
};

export default httpTrigger;
