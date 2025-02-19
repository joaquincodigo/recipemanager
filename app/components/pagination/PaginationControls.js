import PaginationArrow from "./PaginationArrow"
import PaginationNumber from "./PaginationNumber"

export default function PaginationControls() {
	return (
		<div className="flex gap-x-1">
			<PaginationArrow direction={"left"}/>
			<PaginationNumber number={1} isActive={true}/>
			<PaginationNumber number={2} />
			<PaginationNumber number={3} />
			<PaginationNumber />
			<PaginationNumber number={9} />
			<PaginationArrow direction={"right"}/>
		</div>
	)
}
