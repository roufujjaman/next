import { useDispatch, useSelector } from "react-redux";
import type { AppDisspatch, RootState } from "./store";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDisspatch>();
