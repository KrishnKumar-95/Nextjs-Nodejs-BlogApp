import { get } from "@/services/request.service.mjs";
import { formatDate } from "@/utils/tools.mjs";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import Header from "@/components/Header";
import BodyWrapper from "@/components/BodyWrapper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default async function Detail({ params }) {
  const { slug } = params;
  const endpoint = `post?slug=${slug}`;
  const response = await get(endpoint);
  const post = response.data;

  return (
    <main className="flex-col px-24">
      <Header title={post.title}>
        <div className="text-end flex flex-row justify-around">
          {/* <Tooltip title="Edit" placement="left" arrow className="mr-2">
            <div className="border border-blue-600 rounded-md text-center">
              <IconButton
                className="p-0"
                color="primary"
                size="small"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            </div>
          </Tooltip>

          <Tooltip title="Delete" placement="top" arrow className="mr-2">
            <div className="border border-red-600 rounded-md text-center">
              <IconButton
                className="p-0"
                color="error"
                size="small"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Tooltip> */}

          <Tooltip title="Back" placement="right" arrow>
            <Link href="/post">
              <div className="border border-black rounded-md text-center">
                <IconButton
                  className="p-0"
                  color="black"
                  size="small"
                  aria-label="delete"
                >
                  <ArrowBackIcon />
                </IconButton>
              </div>
            </Link>
          </Tooltip>
        </div>
      </Header>

      <BodyWrapper skipBottomHeight="70px">
        <div className="h-full">
          <div className="text-end bg-white sticky top-0">
            <small className="font-semibold">
              {post.author} - {formatDate(post.timestamp)}
            </small>
          </div>
          <div className="text-justify">{post.content}</div>
        </div>
      </BodyWrapper>
    </main>
  );
}
