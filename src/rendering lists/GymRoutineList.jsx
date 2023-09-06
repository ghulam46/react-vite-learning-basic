/* eslint-disable react/prop-types */
function Ceklist({name, isChecked}) {
    return(
        <li>{name} {isChecked && '✅'}</li>
    );
}
export default function GymRoutineList() {

    return(
        <section>
            <h1 className="text-3xl text-blue-800">My Workout Routine</h1>
            <ul>
                <Ceklist 
                    isChecked={true}
                    name="BenchPress"
                />
                <Ceklist 
                    isChecked={true}
                    name="ShoulderPress"
                />
                <Ceklist 
                    isChecked={false}
                    name="LegPress"
                />
            </ul>
        </section>
    );
}