import EditEmployee from "./EditEmployee.tsx";


function Employee(props:any){

    return(
        <>
            <div
                className="m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="object-cover rounded-full h-24 w-24 block mx-auto  rounded-full sm:mx-0 sm:shrink-0" src={props.img}
                     alt="Woman's Face"/>
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            {props.name}
                        </p>
                        {props.role?<p className="text-slate-500 font-medium">
                                {props.role}
                        </p>:<p className="text-slate-500 font-medium">
                            No Role
                        </p>}
                    </div>
                    {props.editEmployee}

                </div>
            </div>
        </>
    )
}
export default Employee;