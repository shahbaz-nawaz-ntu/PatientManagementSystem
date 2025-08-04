import React, { useState } from "react";

const EyeAssessmentPage = () => {
    const [activeSection, setActiveSection] = useState("");

    const assessments = [
        "VA",
        "IOP",
        "Old Glasses",
        "Auto Refraction",
        "Cyclo Auto Refraction",
        "Refraction",
        "Keratometry",
        "Retinoscopy",
        "Optic Disc",
        "Site Of Incision",
        "Orthoptic Assessment",
        "Anterior Chamber",
        "EOM",
        "Hyphema",
        "Lens",
        "Gonioscopy",
        "Hypopyon",
    ];

    const toggleSection = (item) => {
        setActiveSection((prev) => (prev === item ? "" : item));
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-blue-700">Eye Assessment Form</h1>

                <ul className="space-y-4">
                    {assessments.map((item, index) => (
                        <li key={index}>
                            <button
                                className="w-full text-left text-blue-600 font-semibold bg-gray-100 p-3 rounded-md hover:bg-blue-50 transition"
                                onClick={() => toggleSection(item)}
                            >
                                {item}
                            </button>

                            {/* VA Section */}
                            {item === "VA" && activeSection === "VA" && (
                                <div className="mt-4 bg-white  rounded-md p-4 space-y-6 shadow-sm">
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="grid grid-cols-3 grid-cols-5 gap-5">
                                            <input type="text" placeholder="VA (R)" className="border rounded p-2" />
                                            <input type="text" placeholder="Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />

                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="grid grid-cols-3 grid-cols-5 gap-5">
                                            <input type="text" placeholder="VA (L)" className="border rounded p-2" />
                                            <input type="text" placeholder="Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />

                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* IOP Section */}
                            {item === "IOP" && activeSection === "IOP" && (
                                <div className="mt-4 bg-white  rounded-md p-4 space-y-6 shadow-sm">
                                    {/* OD */}
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                            <select className="border rounded p-2">
                                                <option value="">(R) IOP</option>
                                                <option value="1">Value 1</option>
                                                <option value="2">Value 2</option>
                                            </select>
                                            <input type="text" placeholder="Pachymetry R" className="border rounded p-2" />
                                            <input type="text" placeholder="(R) Correction Factor" className="border rounded p-2" />
                                            <input type="text" placeholder="IOP Final R" className="border rounded p-2" />
                                        </div>
                                    </div>

                                    {/* OS */}
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                            <input type="text" placeholder="(L) IOP" className="border rounded p-2" />
                                            <input type="text" placeholder="Pachymetry L" className="border rounded p-2" />
                                            <input type="text" placeholder="(L) Correction Factor" className="border rounded p-2" />
                                            <input type="text" placeholder="IOP Final L" className="border rounded p-2" />
                                        </div>
                                    </div>

                                    {/* Method and Narration */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <select className="border rounded p-2">
                                            <option value="">--select method--</option>
                                            <option value="applanation">Applanation</option>
                                            <option value="noncontact">Non-contact</option>
                                        </select>
                                        <input type="text" placeholder="Narration" className="border rounded p-2" />
                                    </div>
                                </div>
                            )}

                            {item === "Old Glasses" && activeSection === "Old Glasses" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">
                                    {/* OD Section */}
                                    <div>
                                        <div className="w-full text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="flex flex-col gap-3 w-full">
                                            <div className="w-full flex gap-4">
                                                <input type="text" placeholder="sph R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="cyl R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="axis R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="bcva R" className="border rounded p-2 w-[24%]" />
                                            </div>
                                            <div className="flex w-full gap-4">
                                                <input type="text" placeholder="add R" className="border rounded p-2 w-[33%]" />
                                                <input type="text" placeholder="va NR" className="border rounded p-2 w-[33%]" />
                                                <input type="text" placeholder="va NR" className="border rounded p-2 w-[33%]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* OS Section */}
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="flex flex-col gap-3 w-full">
                                            <div className="w-full flex gap-4">
                                                <input type="text" placeholder="sph R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="cyl R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="axis R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="bcva R" className="border rounded p-2 w-[24%]" />
                                            </div>
                                            <div className="flex w-full gap-4">
                                                <input type="text" placeholder="add R" className="border rounded p-2 w-[33%]" />
                                                <input type="text" placeholder="va NR" className="border rounded p-2 w-[33%]" />
                                                <input type="text" placeholder="va NR" className="border rounded p-2 w-[33%]" />
                                            </div>

                                        </div>
                                    </div>

                                    {/* Bottom Row */}
                                    <div className="w-full flex gap-4">
                                        <div className="w-[50%] flex gap-4">
                                            <input type="text" placeholder="IPD D" className="border rounded p-2 w-[50%]" />
                                            <input type="text" placeholder="IPD N" className="border rounded p-2 w-[50%]" />
                                        </div>
                                        <input type="text" placeholder="Remarks" className="border rounded p-2 w-[50%]" />
                                    </div>
                                </div>
                            )}


                            {item === "Auto Refraction" && activeSection === "Auto Refraction" && (
                                <div className="mt-4 bg-white  rounded-md p-4 space-y-6 shadow-sm">
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="grid grid-cols-3 grid-cols-5 gap-5">
                                            <input type="text" placeholder="VA (R)" className="border rounded p-2" />
                                            <input type="text" placeholder="Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />

                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="grid grid-cols-3 grid-cols-5 gap-5">
                                            <input type="text" placeholder="VA (L)" className="border rounded p-2" />
                                            <input type="text" placeholder="Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />

                                        </div>
                                        <div className="w-full flex gap-4">
                                            <div className="w-[50%] flex gap-4">
                                                <input type="text" placeholder="IPD D" className="border rounded p-2 w-[50%]" />
                                                <input type="text" placeholder="IPD N" className="border rounded p-2 w-[50%]" />
                                            </div>
                                            <input type="text" placeholder="Remarks" className="border rounded p-2 w-[50%]" />
                                        </div>
                                    </div>
                                </div>
                            )}



                            {item === "Cyclo Auto Refraction" && activeSection === "Cyclo Auto Refraction" && (
                                <div className="mt-4 bg-white  rounded-md p-4 space-y-6 shadow-sm">
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="grid grid-cols-3 grid-cols-5 gap-5">
                                            <input type="text" placeholder="VA (R)" className="border rounded p-2" />
                                            <input type="text" placeholder="Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />

                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="grid grid-cols-3 grid-cols-5 gap-5">
                                            <input type="text" placeholder="VA (L)" className="border rounded p-2" />
                                            <input type="text" placeholder="Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />

                                        </div>
                                        <div className="w-full flex gap-4">
                                            <div className="w-[50%] flex gap-4">
                                                <input type="text" placeholder="IPD D" className="border rounded p-2 w-[50%]" />
                                                <input type="text" placeholder="IPD N" className="border rounded p-2 w-[50%]" />
                                            </div>
                                            <input type="text" placeholder="Remarks" className="border rounded p-2 w-[50%]" />
                                        </div>
                                    </div>
                                </div>
                            )}



                            {item === "Refraction" && activeSection === "Refraction" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">
                                    {/* OD Section */}
                                    <div>
                                        <div className="w-full text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="flex flex-col gap-3 w-full">
                                            <div className="w-full flex gap-4">
                                                <input type="text" placeholder="sph R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="cyl R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="axis R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="bcva R" className="border rounded p-2 w-[24%]" />
                                            </div>
                                            <div className="flex w-full gap-4">
                                                <input type="text" placeholder="add R" className="border rounded p-2 w-[33%]" />
                                                <input type="text" placeholder="va NR" className="border rounded p-2 w-[33%]" />
                                                <input type="text" placeholder="va NR" className="border rounded p-2 w-[33%]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* OS Section */}
                                    <div>
                                        <div className="w-full text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="flex flex-col gap-3">
                                            <div className="w-full flex gap-4">
                                                <input type="text" placeholder="sph R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="cyl R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="axis R" className="border rounded p-2 w-[24%]" />
                                                <input type="text" placeholder="bcva R" className="border rounded p-2 w-[24%]" />
                                            </div>
                                            <div className="flex w-full gap-4">
                                                <input type="text" placeholder="add R" className="border rounded p-2 w-[33%]" />
                                                <input type="text" placeholder="va NR" className="border rounded p-2 w-[33%]" />
                                                <input type="text" placeholder="va NR" className="border rounded p-2 w-[33%]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Row */}
                                    <div className="w-full flex gap-4">
                                        <div className="w-[50%] flex gap-4">
                                            <input type="text" placeholder="IPD D" className="border rounded p-2 w-[50%]" />
                                            <input type="text" placeholder="IPD N" className="border rounded p-2 w-[50%]" />
                                        </div>
                                        <input type="text" placeholder="Remarks" className="border rounded p-2 w-[50%]" />
                                    </div>
                                    <div className="w-full">
                                        <input type="text" placeholder="Remarks" className="border rounded p-2 w-full" />
                                    </div>
                                </div>
                            )}


                            {item === "Keratometry" && activeSection === "Keratometry" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">
                                    {/* == OD == */}
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="flex flex-col gap-3">
                                            <div className="w-full flex gap-2">
                                                <input type="text" placeholder="k1 R" className="border rounded p-2 w-[25%]" />
                                                <select className="border rounded p-2 w-[25%]">
                                                    <option>– angle° –</option>
                                                </select>
                                                <input type="text" placeholder="k2 R" className="border rounded p-2 w-[25%]" />
                                                <select className="border rounded p-2 w-[25%]">
                                                    <option>– angle° –</option>
                                                </select>
                                            </div>
                                            <div className="w-full flex gap-2">
                                                <div className="w-[50%] flex gap-2">
                                                    <input type="text" placeholder="AL R" className="border rounded p-2 w-[33%]" />
                                                    <input type="text" placeholder="P R" className="border rounded p-2 w-[33%]" />
                                                    <input type="text" placeholder="A Constant R" className="border rounded p-2 w-[33%]" />
                                                </div>
                                                <div className="flex w-full gap-2 w-[50%] ">
                                                    <input type="text" placeholder="IOL R" className="border rounded p-2 w-[50%]" />
                                                    <input type="text" placeholder="Aim IOL R" className="border rounded p-2 w-[50%]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* == OS == */}
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="flex flex-col gap-3">
                                            <div className="w-full flex gap-2">
                                                <input type="text" placeholder="k1 L" className="border rounded p-2 w-[25%]" />
                                                <select className="border rounded p-2 w-[25%]">
                                                    <option>– angle° –</option>
                                                </select>
                                                <input type="text" placeholder="k2 L" className="border rounded p-2 w-[25%]" />
                                                <select className="border rounded p-2 w-[25%]">
                                                    <option>– angle° –</option>
                                                </select>
                                            </div>
                                            <div className="w-full flex gap-2">
                                                <div className="w-[50%] flex gap-2">
                                                    <input type="text" placeholder="AL L" className="border rounded p-2 w-[33%]" />
                                                    <input type="text" placeholder="P L" className="border rounded p-2 w-[33%]" />
                                                    <input type="text" placeholder="A Constant L" className="border rounded p-2 w-[33%]" />
                                                </div>
                                                <div className="flex w-full gap-2 w-[50%] ">
                                                    <input type="text" placeholder="IOL L" className="border rounded p-2 w-[50%]" />
                                                    <input type="text" placeholder="Aim IOL L" className="border rounded p-2 w-[50%]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Method and Narration */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                                        <input type="text" placeholder="Method used" className="border rounded p-2" />
                                        <input type="text" placeholder="Narration" className="border rounded p-2" />
                                    </div>
                                </div>
                            )}


                            {item === "Retinoscopy" && activeSection === "Retinoscopy" && (
                                <div className="mt-4 bg-white  rounded-md p-4 space-y-6 shadow-sm">
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="grid grid-cols-3 grid-cols-5 gap-5">
                                            <input type="text" placeholder="VA (R)" className="border rounded p-2" />
                                            <input type="text" placeholder="Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />

                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="grid grid-cols-3 grid-cols-5 gap-5">
                                            <input type="text" placeholder="VA (L)" className="border rounded p-2" />
                                            <input type="text" placeholder="Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />
                                            <input type="text" placeholder="é Condition" className="border rounded p-2" />

                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                                            {/* Distance dropdown */}
                                            <select className="border rounded p-2">
                                                <option value="">– Distance –</option>
                                                <option value="6m">6 meters</option>
                                                <option value="3m">3 meters</option>
                                                <option value="1m">1 meter</option>
                                            </select>

                                            {/* Method dropdown */}
                                            <select className="border rounded p-2">
                                                <option value="">– Method –</option>
                                                <option value="snellen">Snellen</option>
                                                <option value="logmar">LogMAR</option>
                                                <option value="e-chart">E Chart</option>
                                            </select>

                                            {/* Dilated With input */}
                                            <input
                                                type="text"
                                                placeholder="Dilated with"
                                                className="border rounded p-2"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Dilated with"
                                            className="border rounded p-2 w-full"
                                        />
                                    </div>
                                </div>
                            )}

                            {item === "Optic Disc" && activeSection === "Optic Disc" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">
                                    {/* == OD == */}
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <select className="border rounded p-2">
                                                <option>--select for (R) Vertical--</option>
                                                <option value="0.3">0.3</option>
                                                <option value="0.4">0.4</option>
                                                <option value="0.5">0.5</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>--select for (R) Horizontal--</option>
                                                <option value="0.3">0.3</option>
                                                <option value="0.4">0.4</option>
                                                <option value="0.5">0.5</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>--select narration for (R)--</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Pale Disc">Pale Disc</option>
                                                <option value="Cupping">Cupping</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* == OS == */}
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <select className="border rounded p-2">
                                                <option>--select for (L) Vertical--</option>
                                                <option value="0.3">0.3</option>
                                                <option value="0.4">0.4</option>
                                                <option value="0.5">0.5</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>--select for (L) Horizontal--</option>
                                                <option value="0.3">0.3</option>
                                                <option value="0.4">0.4</option>
                                                <option value="0.5">0.5</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>--select narration for (L)--</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Pale Disc">Pale Disc</option>
                                                <option value="Cupping">Cupping</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Narration Text Field */}
                                    <input
                                        type="text"
                                        placeholder="Narration"
                                        className="border rounded p-2 w-full"
                                    />
                                </div>
                            )}



                            {item === "Site Of Incision" && activeSection === "Site Of Incision" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">

                                    <div className="w-full flex gap-4">
                                        <div className="w-[50%] flex gap-4">
                                            <input type="text" placeholder="IPD D" className="border rounded p-2 w-[50%]" />
                                            <input type="text" placeholder="IPD N" className="border rounded p-2 w-[50%]" />
                                        </div>
                                        <input type="text" placeholder="Remarks" className="border rounded p-2 w-[50%]" />
                                    </div>
                                </div>
                            )}


                            {item === "Orthoptic Assessment" && activeSection === "Orthoptic Assessment" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">

                                    <div className="w-full flex gap-4">
                                        <div className="w-[50%] flex gap-4">
                                            <input type="text" placeholder="IPD D" className="border rounded p-2 w-[50%]" />
                                            <input type="text" placeholder="IPD N" className="border rounded p-2 w-[50%]" />
                                        </div>
                                        <input type="text" placeholder="Remarks" className="border rounded p-2 w-[50%]" />
                                    </div>
                                </div>
                            )}


                            {item === "Anterior Chamber" && activeSection === "Anterior Chamber" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <select className="border rounded p-2">
                                            <option>--select for (R) Vertical--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>
                                        <select className="border rounded p-2">
                                            <option>--select for (R) Horizontal--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>
                                        <select className="border rounded p-2">
                                            <option>--select narration for (R)--</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Pale Disc">Pale Disc</option>
                                            <option value="Cupping">Cupping</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Narration"
                                            className="border rounded p-2 w-full"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <select className="border rounded p-2">
                                            <option>--select for (R) Vertical--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>
                                        <select className="border rounded p-2">
                                            <option>--select for (R) Horizontal--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>
                                        <select className="border rounded p-2">
                                            <option>--select narration for (R)--</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Pale Disc">Pale Disc</option>
                                            <option value="Cupping">Cupping</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Narration"
                                            className="border rounded p-2 w-full"
                                        />
                                    </div>

                                </div>
                            )}

                            {item === "EOM" && activeSection === "EOM" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">
                                    {/* == OD == */}
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* == OS == */}
                                    <div className="flex flex-col gap-4">
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>.........</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Restricted">Restricted</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Narration"
                                                className="border rounded p-2 w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}



                            {item === "Hyphema" && activeSection === "Hyphema" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <select className="border rounded p-2">
                                            <option>--select for (R) Vertical--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>
                                        <select className="border rounded p-2">
                                            <option>--select for (R) Horizontal--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>
                                        <select className="border rounded p-2">
                                            <option>--select narration for (R)--</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Pale Disc">Pale Disc</option>
                                            <option value="Cupping">Cupping</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Narration"
                                            className="border rounded p-2 w-full"
                                        />
                                    </div>
                                </div>
                            )}

                            {item === "Lens" && activeSection === "Lens" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OD ==</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <select className="border rounded p-2">
                                                <option>--select for (R) Vertical--</option>
                                                <option value="NO1 NC1">NO1 NC1</option>
                                                <option value="NO2 NC2">NO2 NC2</option>
                                                <option value="NO3 NC3">NO3 NC3</option>
                                                <option value="NO4 NC4">NO4 NC4</option>
                                                <option value="NO5 NC5">NO5 NC5</option>


                                            </select>
                                            <select className="border rounded p-2">
                                                <option>--select for (R) Horizontal--</option>
                                                <option value="0.3">0.3</option>
                                                <option value="0.4">0.4</option>
                                                <option value="0.5">0.5</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>--select narration for (R)--</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Pale Disc">Pale Disc</option>
                                                <option value="Cupping">Cupping</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <select className="border rounded p-2">
                                                <option>--select for (R) Vertical--</option>
                                                <option value="0.3">0.3</option>
                                                <option value="0.4">0.4</option>
                                                <option value="0.5">0.5</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>--select for (R) Horizontal--</option>
                                                <option value="0.3">0.3</option>
                                                <option value="0.4">0.4</option>
                                                <option value="0.5">0.5</option>
                                            </select>
                                            <select className="border rounded p-2">
                                                <option>--select narration for (R)--</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Pale Disc">Pale Disc</option>
                                                <option value="Cupping">Cupping</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Narration"
                                            className="border rounded p-2 w-full"
                                        />
                                    </div>

                                </div>
                            )}



                            {item === "Gonioscopy" && activeSection === "Gonioscopy" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">
                                    <div className="text-center text-gray-600 font-semibold mb-2">== OS ==</div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <select className=" border rounded p-2">
                                            <option>--select for (R) Vertical--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>

                                        <select className="border rounded p-2">
                                            <option>--select for (R) Horizontal--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>
                                        <select className="border rounded p-2">
                                            <option>--select narration for (R)--</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Pale Disc">Pale Disc</option>
                                            <option value="Cupping">Cupping</option>
                                        </select>
                                        <select className=" border rounded p-2">
                                            <option>--select for (R) Vertical--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>

                                        <select className="border rounded p-2">
                                            <option>--select for (R) Horizontal--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>
                                        <select className="border rounded p-2">
                                            <option>--select narration for (R)--</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Pale Disc">Pale Disc</option>
                                            <option value="Cupping">Cupping</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Narration"
                                            className="border rounded p-2 w-full"
                                        />
                                    </div>
                                </div>

                            )}


                            {item === "Hypopyon" && activeSection === "Hypopyon" && (
                                <div className="mt-4 bg-white rounded-md p-4 space-y-6 shadow-sm">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <select className=" border rounded p-2">
                                            <option>--select for (R) Vertical--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>

                                        <select className="border rounded p-2">
                                            <option>--select for (R) Horizontal--</option>
                                            <option value="0.3">0.3</option>
                                            <option value="0.4">0.4</option>
                                            <option value="0.5">0.5</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Narration"
                                            className="border rounded p-2 w-full"
                                        />
                                    </div>
                                </div>

                            )}

                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
};

export default EyeAssessmentPage;