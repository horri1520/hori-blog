const getTimestamp = (date: string) => {
  const d = new Date(date);

  if (d === null) {
    return 0;
  } else {
    return d.valueOf();
  }
};

export default getTimestamp;
