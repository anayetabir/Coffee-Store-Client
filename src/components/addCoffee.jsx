

const AddCoffee = () => {

    


    return (
        <div className="bg-[#F4F3F0] p-24  ">

            <h2 className="text-3xl font-extrabold" >Add Coffee</h2>

            <form>
                {/* form name & quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>

                        </label>
                        <label className="input-group">
                            <input type="text" name="" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Availabe Quantity </span>

                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Availabe Quantity" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>

                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>

                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="taste" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>
                {/* form  category & details row  row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Category</span>

                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Datails</span>

                        </label>
                        <label className="input-group">
                            <input type="text" name="datails" placeholder="Details" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                {/* form photo url */}
                <div className="mb-8">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>

                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>


                <input type="submit" value="Add Coffee" className="btn btn-block" />

            </form>

        </div>
    );
};

export default AddCoffee;