export function SortArray(arrayObjects, sortby, sortDirection) {
  arrayObjects.sort((a, b) => (a[sortby] > b[sortby] ? 1 : -1));
  if (sortDirection === 'desc') arrayObjects.reverse();
}
