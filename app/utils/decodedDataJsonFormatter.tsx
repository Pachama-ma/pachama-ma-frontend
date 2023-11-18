export function decodedDataJsonFormatter(decodedDataJson: string) {
  const data = JSON.parse(decodedDataJson);
  const extractedData = data.reduce((acc: any, item: any) => {
    acc[item.name] = item.value.value;
    return acc;
  }, {});
  return extractedData;
}
