import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";

const DataLoader: LoaderFunction<string> = async (
  args: LoaderFunctionArgs<string>
) => {
  const { params } = args;
  const result = await fetch(`/api/jobs/${params.id}`);
  const data = await result.json();
  return data;
};

export default DataLoader;
