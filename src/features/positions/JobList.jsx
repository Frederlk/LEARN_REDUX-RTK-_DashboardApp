import { JobPosition } from "./JobPosition";
import { useDispatch } from "react-redux/es/exports";

import { usePositions } from "./usePositions";
import { useFetchPositions } from "./useFetchPositions";
import { addFilter } from "../filter/filterSlice";

const JobList = () => {
    useFetchPositions();
    const positions = usePositions();

    const dispatch = useDispatch();

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    };

    return (
        <div className="job-list">
            {positions.map((item) => (
                <JobPosition handleAddFilter={handleAddFilter} key={item.id} {...item} />
            ))}
        </div>
    );
};

export { JobList };
