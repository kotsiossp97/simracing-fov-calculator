import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Page404: React.FC = () => {
  return (
    <div className="h-full flex justify-center items-center flex-col gap-10">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-2xl">The page you've requested cannot be found.</p>
      <Link to={"/"}>
        <Button>Return To Home</Button>
      </Link>
    </div>
  );
};

export default Page404;
