let count = 0;

export function simpleUuid() {
  count++;
  return 'uuid-' + count;
}
