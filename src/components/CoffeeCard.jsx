

const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, taste, category, details, photo } = coffee;


    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
            <div className=" flex justify-between w-full pr-4">
                <div className="mx-4">
                    <h2 className="card-title">Name : {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn ">VIEW</button>
                        <button className="btn ">EDIT</button>
                        <button className="btn ">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;