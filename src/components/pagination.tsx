"use client";

import { ArrowLeftSquareIcon, ArrowRightSquareIcon } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { ButtonLink } from "@/components/custom-ui/button-link";
import { POSTS_PER_PAGE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

type PaginationProps = {
  currentPage: number;
  totalPosts: number;
};

export const Pagination = ({ currentPage, totalPosts }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("pg", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-end gap-2">
      {currentPage === 1 ? (
        <Button disabled variant="ghost">
          <ArrowLeftSquareIcon />
        </Button>
      ) : (
        <ButtonLink variant="ghost" href={createPageURL(currentPage - 1)}>
          <ArrowLeftSquareIcon />
        </ButtonLink>
      )}

      {currentPage === totalPages ? (
        <Button disabled variant="ghost">
          <ArrowRightSquareIcon />
        </Button>
      ) : (
        <ButtonLink variant="ghost" href={createPageURL(currentPage + 1)}>
          <ArrowRightSquareIcon />
        </ButtonLink>
      )}
    </div>
  );
};
