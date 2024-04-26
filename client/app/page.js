import { Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export default async function Home() {
  return (
    <main className="min-h-screen flex-col bg-blue-100 p-24">
      <div className="text-2xl font-medium">Krishan Kumar</div>
      <div className="text-xl">Software Developer</div>
      <div className="font-bold mt-3">Skills</div>
      <table>
        <tbody>
          <tr>
            <td width={80} className="font-semibold">
              Frontend
            </td>
            <td className="">React.js, Next.js, Vue.js</td>
          </tr>
          <tr>
            <td width={80} className="font-semibold">
              Backend
            </td>
            <td className="">Node.js, Express.js</td>
          </tr>
          <tr>
            <td width={80} className="font-semibold">
              Database
            </td>
            <td className="">MongoDB, MySQL</td>
          </tr>
        </tbody>
      </table>

      <div className="py-10">
        <Link href="/post" className="outline-none">
          <Button variant="contained" endIcon={<ArrowForwardOutlinedIcon />}>
            Go To App
          </Button>
        </Link>
      </div>
    </main>
  );
}
