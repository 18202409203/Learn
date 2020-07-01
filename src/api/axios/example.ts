import cAxios from "../cAxios";
import { example } from "../apiList";
import { AxiosResponse } from "axios";

export async function getExampleList(): Promise<boolean | AxiosResponse> {
  return await cAxios(example.getExampleList);
}
