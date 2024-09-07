export default function Content(props) {
    return (
        <div>
            <p>
                {props.part1} {props.xercises1}
            </p>
            <p>
                {props.part2} {props.exercises2}
            </p>
             <p>
                {props.part3} {props.exercises3}
            </p>
        </div>
    )
}