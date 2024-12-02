import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";

function CreateDesign() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        description: "",
        thumbnail: null,
        previewImage: ""
    });

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadedImage
                });
            });
        }
    }

    function handleUserInput(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

    async function OnFormSubmit(e) {
        e.preventDefault();
        if (!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.previewImage) {
            toast.error("All fields are mandatory");
            return;
        }

        const response = await dispatch(createNewCourse(userInput));
        if (response?.payload?.success) {
            setUserInput({
                title: "",
                category: "",
                description: "",
                thumbnail: null,
                previewImage: ""
            });
            navigate("/designs");
        }
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    onSubmit={OnFormSubmit}
                    className="flex flex-col justify-center gap-2 md:gap-5 rounded-lg p-6 mt-5 relative text-white w-[80vw] md:w-[700px] sm:my-10 shadow-lg bg-gradient-to-b from-purple-500 to-indigo-600"
                >
                    <div>
                        <Link to={"/designs"} className="absolute left-2 text-xl text-accent cursor-pointer">
                            <AiOutlineArrowLeft />
                        </Link>
                    </div>

                    <h1 className="text-center text-3xl font-semibold mb-5">Create New Design</h1>

                    <main className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
                        <div>
                            <div className="mb-4">
                                <label htmlFor="image_uploads" className="cursor-pointer w-full h-44 flex items-center justify-center border-2 border-dashed rounded-lg bg-gray-800 hover:bg-gray-700 transition-all">
                                    {userInput.previewImage ? (
                                        <img className="w-full h-full object-cover rounded-lg" src={userInput.previewImage} alt="Design Thumbnail" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-lg font-semibold text-gray-400">
                                            Upload your design image
                                        </div>
                                    )}
                                </label>
                                <input
                                    className="hidden"
                                    type="file"
                                    id="image_uploads"
                                    accept=".jpg, .jpeg, .png"
                                    name="image_uploads"
                                    onChange={handleImageUpload}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-lg font-semibold" htmlFor="title">Design title</label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter design title"
                                    className="bg-transparent px-4 py-2 border-2 rounded-lg text-white border-gray-600 focus:outline-none focus:border-yellow-500"
                                    value={userInput.title}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="createdBy">Design Artist</label>
                                <input
                                    required
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="Enter artist name"
                                    className="bg-transparent px-4 py-2 border-2 rounded-lg text-white border-gray-600 focus:outline-none focus:border-yellow-500"
                                    value={userInput.createdBy}
                                    onChange={handleUserInput}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="category">Design Category</label>
                                <input
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter design category"
                                    className="bg-transparent px-4 py-2 border-2 rounded-lg text-white border-gray-600 focus:outline-none focus:border-yellow-500"
                                    value={userInput.category}
                                    onChange={handleUserInput}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="description">Design Description</label>
                                <textarea
                                    required
                                    name="description"
                                    id="description"
                                    placeholder="Enter design description"
                                    className="bg-transparent px-4 py-2 border-2 rounded-lg text-white border-gray-600 focus:outline-none focus:border-yellow-500 resize-none h-32"
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>
                    </main>

                    <button type="submit" className="w-full bg-yellow-600 text-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out py-3 rounded-lg font-semibold">
                        Create Design
                    </button>
                </form>
            </div>
        </HomeLayout>
    );
}

export default CreateDesign;
