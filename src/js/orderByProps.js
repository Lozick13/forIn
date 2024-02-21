export function orderByProps(obj, order) {
  const orderProps = [];
  const restProps = [];

  for (let prop in order) {
    if (prop in obj) {
      orderProps.push({ key: prop, value: obj[prop] });
    }
  });

  for (let prop in obj) {
    if (!order.includes(prop)) {
      restProps.push({ key: prop, value: obj[prop] });
    }
  }

  restProps.sort((a, b) => {
    return a.key.localeCompare(b.key);
  });

  return orderProps.concat(restProps);
}
