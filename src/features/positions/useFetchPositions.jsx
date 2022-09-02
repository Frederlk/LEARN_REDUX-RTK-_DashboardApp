import { useEffect } from "react";
import { useDispatch } from "react-redux";
import data from "../../mock/data.json";
import { addPositions } from "./postionSlice";

export const useFetchPositions = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPositions(data));
    }, [dispatch]);
};
