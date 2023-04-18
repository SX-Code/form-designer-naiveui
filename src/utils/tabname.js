let id = 0;

function resetId() {
  id = 0;
}


export default function tabname() {
  if ([0, 1].indexOf(id++) != -1) return 0;
  return id - 2;
}

export { resetId }