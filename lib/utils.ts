import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function paginate(array: Array<any>, p: number, perPage: number) {
  const start = (p - 1) * perPage;
  const end = start + perPage;

  // Slice the array to get the desired page
  const paginatedItems = array.slice(start, end);

  return paginatedItems;
}

export function getPaginationInfo(
  currentPage: number,
  totalItems: number,
  perPage: number,
) {
  const totalPages = Math.ceil(totalItems / perPage);

  // Calculate previous and next page numbers
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return { prevPage, nextPage };
}
