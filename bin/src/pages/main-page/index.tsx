import React from 'react';
import {sections} from "../../constants/sections.ts";

const MainPage: React.FC = () => {
    return (
        <div className="bg-transparent max-w-full">
            <div className="mx-auto max-w-[85%] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div
                    className="grid grid-cols-5 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {sections.map((section, index) => (
                        <a key={index} href={section.hyperlinkPath} className="group hover:scale-[1.02] transition-transform duration-500">
                            <div
                                className="w-full overflow-hidden rounded-lg bg-gray-200 dummy-filler bg-center bg-contain bg-no-repeat"
                                style={{backgroundImage: `url(${section.imageURL})`}}
                            >
                            </div>
                            <h3 className="mt-4 text-sm text-white font-bold text-center">{section.name}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPage;