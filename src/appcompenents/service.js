import RequestService from "./services/requestservice";

const Service = ({user_id}) =>{
    return (
        <>
        <RequestService user_id={user_id} />
        </>
    )

}

export default Service;