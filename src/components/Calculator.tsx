import Result from "./Result"
import Grid from "./Grid"
import Button from "./Button";
import { useCalculator } from "../useCalculator";
import { GRID_SCHEMA } from "../constants";

function Calculator() {
    const [value, setAction] = useCalculator();

    return (
        <div>
            <Grid>
                <Result>{value || 0}</Result>
                {GRID_SCHEMA.map(key => (
                    <Button key={key} onClick={() => setAction(key)}>{key}</Button>
                ))}
            </Grid>
        </div>
    );
}

export default Calculator