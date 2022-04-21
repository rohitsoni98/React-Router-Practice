import { useParams } from "react-router-dom";

const UserDetails = () => {

	const { userId } = useParams();

	return (
		<div>
			<h2>Details about user {userId}</h2>
		</div>
	)
}

export default UserDetails;