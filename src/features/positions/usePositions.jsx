import { useSelector } from "react-redux";
import { selectVisiblePositions } from "./postionSlice";
import { selectFilters } from "../filter/filterSlice";

export const usePositions = () => {
    const currentFilters = useSelector(selectFilters);
    const posititons = useSelector((state) => selectVisiblePositions(state, currentFilters));

    return posititons;
};
