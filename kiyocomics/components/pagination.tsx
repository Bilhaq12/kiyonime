"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  maxPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export function Pagination({ maxPage, hasNextPage, hasPrevPage }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1

  const handlePageChange = (page: number) => {
    router.push(`/?page=${page}`)
  }

  return (
    <div className="flex justify-center gap-4 mt-8">
      {hasPrevPage && (
        <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)}>
          Previous Page
        </Button>
      )}
      <span className="flex items-center">
        Page {currentPage} of {maxPage}
      </span>
      {hasNextPage && (
        <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)}>
          Next Page
        </Button>
      )}
    </div>
  )
}

