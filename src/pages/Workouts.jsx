import React from "react";
// import Video from "../components/Video";

export default function Workouts(){

    //Later implementation => they have to be on a seed directory => file.json
    const workouts = [
        {
            id: 1,
            name: 'Abs Workout.',
            description: 'Full 2 weeks intensive workout with 4 different plans.',
            imgSrc: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 2,
            name: 'Leg Workout.',
            description: 'Empower your legs to the next level in just 4 weeks.',
            imgSrc: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 3,
            name: 'Upper-Body Workout.',
            description: 'Do not hesitate to avoid this step - 4 different programs included.',
            imgSrc: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 4,
            name: 'Cardio - Running.',
            description: 'Get the best out of your breath - 20mins plan workout',
            imgSrc: 'https://images.pexels.com/photos/4839736/pexels-photo-4839736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
    ]

    return(
        <div className="h-100 bg-workouts top-0 pb-10 pt-10">
            <h1 className="flex justify-center title-1">Trust the Process.</h1>
            <h2 className="flex justify-center title-2">Join our Workout Routines.</h2>

            <div className="pt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {workouts.map((workout)=>(
                    <div className="grid workout-container" key={workout.id}>
                        <div className="gradient-black"></div>
                        <img className="object-cover img-workout" src={workout.imgSrc}></img>
                        <div className="absolute mt-[45%] lg:mt-[25%] ml-5">
                            <h3 className="text-white workout-title">{workout.name}</h3>
                            <p className="text-white workout-description">{workout.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="triangle black-triangle hidden">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
            {/* <Video/> */}
        </div>
    )
};