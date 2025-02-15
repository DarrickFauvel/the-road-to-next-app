import { ticketsPath } from "@/paths";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-lg">HomePage</h2>

        <Link href="/tickets" className="text-sm underline">
          Got to Tickets
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="text-sm underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
