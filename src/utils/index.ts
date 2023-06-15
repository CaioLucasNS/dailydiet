export const personalizeConsole = (string: string, data: any) =>
  console.log(`${string} = ${JSON.stringify(data, null, 2)}`);
